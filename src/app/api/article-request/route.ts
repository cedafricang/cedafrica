import { NextResponse } from "next/server";

const ZOHO_URL = "https://www.zohoapis.com/crm/v2/Leads";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxt0Lkh1j5vLy328tZm4uYTrRuroWIh04D-2-8f5ggPjhpnx-5O1sVkIADXJc8Fh4wWqQ/exec";

/* ---------------- ARTICLE LINKS ---------------- */
/* ✅ FIXED: supports BOTH id AND slug */

const ARTICLE_LINKS: Record<string, string> = {
  // by ID
  id3: "https://ced-africa.vercel.app/data/CED_HomeCinema_Pitfalls_Architect.pdf",
  id4: "https://ced-africa.vercel.app/data/CED_HomeCinema_Pitfalls_MEP.pdf",

  // by slug (THIS WAS YOUR MISSING PIECE 🔥)
  "architect-pitfalls":
    "https://ced-africa.vercel.app/data/CED_HomeCinema_Pitfalls_Architect.pdf",

  "mep-pitfalls":
    "https://ced-africa.vercel.app/data/CED_HomeCinema_Pitfalls_MEP.pdf",
};

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

    /* ---------------- DEBUG (IMPORTANT) ---------------- */
    console.log("Incoming articleId:", articleId);
    console.log("Incoming articleSlug:", articleSlug);

    /* ---------------- VALIDATION ---------------- */

    if (!email || !fullName) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    /* ---------------- ENV CHECK ---------------- */

    if (
      !process.env.RESEND_API_KEY ||
      !process.env.ZOHO_CLIENT_ID ||
      !process.env.ZOHO_CLIENT_SECRET ||
      !process.env.ZOHO_REFRESH_TOKEN
    ) {
      return NextResponse.json(
        { error: "Server misconfiguration" },
        { status: 500 }
      );
    }

    const subject = `Article Request — ${articleTitle}`;

    /* ---------------- 1. INTERNAL EMAIL ---------------- */

    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "CED Platform <marketing@ced.africa>",
        to: [
          "marketing@ced.africa",
          "design@ced.africa",
          "sadediran@ced.africa",
        ],
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

    /* ---------------- 2. SEND PDF TO USER (FIXED 🔥) ---------------- */

    try {
      const link =
        ARTICLE_LINKS[articleId] ||
        ARTICLE_LINKS[articleSlug] ||
        null;

      console.log("Resolved link:", link);

      if (link) {
        const emailRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "CED Africa <marketing@ced.africa>",
            to: [email],
            subject: `Your article — ${articleTitle}`,
            html: buildUserEmail({
              fullName,
              articleTitle,
              link,
            }),
          }),
        });

        const data = await emailRes.json();
        console.log("USER EMAIL RESPONSE:", data);
      } else {
        console.log("❌ No link found — email not sent");
      }

    } catch (err) {
      console.error("User Email Error:", err);
    }

    /* ---------------- 3. SEND TO ZOHO ---------------- */

    try {
      const token = await getZohoAccessToken();

      const zohoRes = await fetch(ZOHO_URL, {
        method: "POST",
        headers: {
          Authorization: `Zoho-oauthtoken ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              Last_Name: fullName || "Unknown",
              Email: email,
              Company: company || "Unknown",

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

      const zohoData = await zohoRes.json();

      if (!zohoRes.ok) {
        console.error("Zoho Error:", zohoData);
      }

    } catch (err) {
      console.error("Zoho Request Failed:", err);
    }

    /* ---------------- 4. GOOGLE SHEETS ---------------- */

    try {
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pathway: "article_request",
          contact: fullName,
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

function buildUserEmail(data: any) {
  return `
    <div style="font-family:Arial; line-height:1.6;">
      <p>Hi ${data.fullName},</p>

      <p>Here is your requested article:</p>

      <p><strong>${data.articleTitle}</strong></p>

      <p>
        <a href="${data.link}" target="_blank">
          Download Article
        </a>
      </p>

      <br/>

      <p>— CED Africa</p>
    </div>
  `;
}

/* ---------------- TOKEN HELPER ---------------- */

async function getZohoAccessToken() {
  const res = await fetch("https://accounts.zoho.com/oauth/v2/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      refresh_token: process.env.ZOHO_REFRESH_TOKEN!,
      client_id: process.env.ZOHO_CLIENT_ID!,
      client_secret: process.env.ZOHO_CLIENT_SECRET!,
      grant_type: "refresh_token",
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    console.error("Zoho token error:", data);
    throw new Error("Failed to get Zoho access token");
  }

  return data.access_token;
}