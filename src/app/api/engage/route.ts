import { NextResponse } from "next/server";

const ZOHO_URL = "https://www.zohoapis.com/crm/v2/Leads";

// ✅ NEW GOOGLE SHEETS URL
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxt0Lkh1j5vLy328tZm4uYTrRuroWIh04D-2-8f5ggPjhpnx-5O1sVkIADXJc8Fh4wWqQ/exec";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const pathway: string = body.pathway || "unknown";

    /* ---------------- BASIC VALIDATION ---------------- */

    if (!body.email || !body.contact) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    /* ---------------- ENV CHECK ---------------- */

    if (!process.env.RESEND_API_KEY || !process.env.ZOHO_ACCESS_TOKEN) {
      console.error("Missing environment variables");
      return NextResponse.json(
        { error: "Server misconfiguration" },
        { status: 500 }
      );
    }

    /* ---------------- EMAIL SUBJECT ---------------- */

    const subjectMap: Record<string, string> = {
      partner: "New Partner Application — System Integrator",
      specifier: "New Specifier Request — Architect / Consultant",
      project: "New Project Consultation — Developer",
      proav: "New ProAV Enquiry — Enterprise",
    };

    const subject = subjectMap[pathway] || "New Engage Submission";

    /* ---------------- 1. SEND EMAIL ---------------- */

    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "CED Platform <marketing@ced.africa>",
        to: ["marketing@ced.africa", "design@ced.africa"],
        subject,
        html: buildEmail(body, pathway),
      }),
    });

    if (!emailRes.ok) {
      console.error("Email failed");
    }

    /* ---------------- 2. SEND TO ZOHO ---------------- */

    const zohoRes = await fetch(ZOHO_URL, {
      method: "POST",
      headers: {
        Authorization: `Zoho-oauthtoken ${process.env.ZOHO_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            Company: body.company || body.organization || "Unknown",
            Last_Name: body.contact || "Unknown",
            Email: body.email,
            Phone: body.phone,
            Lead_Source: "CED Website",
            Lead_Status: "New",
            Description: buildDescription(body, pathway),
          },
        ],
      }),
    });

    const zohoData = await zohoRes.json();

    if (!zohoRes.ok) {
      console.error("Zoho Error:", zohoData);
    }

    /* ---------------- 3. SEND TO GOOGLE SHEETS ---------------- */

    try {
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pathway,
          ...body,
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
      message: "Submission received",
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

function buildEmail(data: Record<string, any>, pathway: string) {
  return `
    <div style="font-family:Arial; line-height:1.6;">
      <h2>New Engage Submission</h2>
      <p><strong>Pathway:</strong> ${pathway}</p>
      <hr/>

      ${Object.entries(data)
        .map(([key, value]) => {
          if (key === "pathway") return "";
          return `<p><strong>${key}:</strong> ${value}</p>`;
        })
        .join("")}
    </div>
  `;
}

function buildDescription(data: Record<string, any>, pathway: string) {
  let text = `Pathway: ${pathway}\n\n`;

  Object.entries(data).forEach(([key, value]) => {
    if (key === "pathway") return;
    text += `${key}: ${value}\n`;
  });

  return text;
}