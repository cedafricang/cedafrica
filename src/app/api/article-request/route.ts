import { NextResponse } from "next/server";

const ZOHO_URL = "https://www.zohoapis.com/crm/v2/Leads";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxt0Lkh1j5vLy328tZm4uYTrRuroWIh04D-2-8f5ggPjhpnx-5O1sVkIADXJc8Fh4wWqQ/exec";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      company,
      articleTitle,
      articleSlug,
      articleId,
    } = body;

    /* ---------------- VALIDATION ---------------- */

    if (!email || !fullName) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    /* ---------------- ENV CHECK ---------------- */

    if (!process.env.RESEND_API_KEY || !process.env.ZOHO_ACCESS_TOKEN) {
      return NextResponse.json(
        { error: "Server misconfiguration" },
        { status: 500 }
      );
    }

    /* ---------------- EMAIL SUBJECT ---------------- */

    const subject = `Article Request — ${articleTitle}`;

    /* ---------------- 1. SEND EMAIL ---------------- */

    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "CED Platform <marketing@ced.africa>",
        to: ["marketing@ced.africa", "design@ced.africa"],
        subject,
        html: buildEmail({
          fullName,
          email,
          company,
          articleTitle,
          articleSlug,
        }),
      }),
    });

    /* ---------------- 2. SEND TO ZOHO ---------------- */

    try {
      await fetch(ZOHO_URL, {
        method: "POST",
        headers: {
          Authorization: `Zoho-oauthtoken ${process.env.ZOHO_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              Company: company || "Unknown",
              Last_Name: fullName || "Unknown",
              Email: email,
              Lead_Source: "Knowledge Hub",
              Lead_Status: "New",
              Description: `
Article Request: ${articleTitle}
Slug: ${articleSlug}
ID: ${articleId}

Company: ${company}
              `,
            },
          ],
        }),
      });
    } catch (err) {
      console.error("Zoho Error:", err);
    }

    /* ---------------- 3. GOOGLE SHEETS (FIXED) ---------------- */

    try {
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pathway: "article_request", // ✅ IMPORTANT (matches your working one)
          contact: fullName,          // ✅ THIS FIXES YOUR ISSUE
          email,
          company,
          articleTitle,
          articleSlug,
          articleId,
        }),
      });

      const text = await res.text();
      console.log("Google Sheets response:", text);

    } catch (err) {
      console.error("Google Sheets Error:", err);
    }

    /* ---------------- RESPONSE ---------------- */

    return NextResponse.json({
      success: true,
      message: "Request received",
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}

/* ---------------- HELPERS ---------------- */

function buildEmail(data: any) {
  return `
    <div style="font-family:Arial; line-height:1.6;">
      <h2>New Article Request</h2>
      <hr/>

      <p><strong>Article:</strong> ${data.articleTitle}</p>
      <p><strong>Slug:</strong> ${data.articleSlug}</p>

      <br/>

      <p><strong>Name:</strong> ${data.fullName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.company}</p>

    </div>
  `;
}