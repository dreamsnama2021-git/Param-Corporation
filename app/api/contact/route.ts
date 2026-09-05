import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.ADMIN_EMAIL || "sanchay@paramcorp.in";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "Param Corporation <onboarding@resend.dev>";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      fullName,
      email,
      phone,
      company,
      companyName,
      designation,
      query,
      message,
      source = "Contact Form",
      categoryName,
    } = body;

    const senderName = (name || fullName || "Website Visitor").trim();
    const senderEmail = (email || "").trim();
    const senderPhone = (phone || "").trim();
    const senderCompany = (company || companyName || "").trim();
    const senderDesignation = (designation || "").trim();
    const senderMessage = (query || message || "").trim();

    // Basic validation
    if (!senderEmail && !senderPhone) {
      return NextResponse.json(
        { error: "Email or phone number is required" },
        { status: 400 }
      );
    }

    const subject = `[${source}] New lead from ${senderName}${senderCompany ? ` (${senderCompany})` : ""}`;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>${subject}</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; color: #1e293b;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9; padding: 30px 10px;">
            <tr>
              <td align="center">
                <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #0b3c5d 0%, #0093cb 50%, #00a65d 100%); padding: 24px 30px; text-align: left;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.5px;">Param Corporation</h1>
                      <p style="color: rgba(255, 255, 255, 0.9); margin: 6px 0 0 0; font-size: 14px;">${source}</p>
                    </td>
                  </tr>

                  <!-- Content Area -->
                  <tr>
                    <td style="padding: 30px;">
                      <h2 style="color: #0f172a; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">
                        Lead & Contact Details
                      </h2>

                      <table role="presentation" width="100%" cellspacing="0" cellpadding="8" style="font-size: 14px; border-collapse: collapse;">
                        <tr style="background-color: #f8fafc;">
                          <td style="width: 35%; font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Full Name:</td>
                          <td style="width: 65%; color: #0f172a; font-weight: 500; border-bottom: 1px solid #e2e8f0;">${senderName}</td>
                        </tr>
                        <tr>
                          <td style="font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Email:</td>
                          <td style="color: #0f172a; border-bottom: 1px solid #e2e8f0;">
                            ${senderEmail ? `<a href="mailto:${senderEmail}" style="color: #0093cb; text-decoration: none;">${senderEmail}</a>` : "N/A"}
                          </td>
                        </tr>
                        <tr style="background-color: #f8fafc;">
                          <td style="font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Phone:</td>
                          <td style="color: #0f172a; border-bottom: 1px solid #e2e8f0;">
                            ${senderPhone ? `<a href="tel:${senderPhone}" style="color: #0093cb; text-decoration: none;">${senderPhone}</a>` : "N/A"}
                          </td>
                        </tr>
                        ${senderCompany ? `
                        <tr>
                          <td style="font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Company:</td>
                          <td style="color: #0f172a; border-bottom: 1px solid #e2e8f0;">${senderCompany}</td>
                        </tr>` : ""}
                        ${senderDesignation ? `
                        <tr style="background-color: #f8fafc;">
                          <td style="font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Designation:</td>
                          <td style="color: #0f172a; border-bottom: 1px solid #e2e8f0;">${senderDesignation}</td>
                        </tr>` : ""}
                        ${categoryName ? `
                        <tr>
                          <td style="font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Category / Catalogue:</td>
                          <td style="color: #0f172a; border-bottom: 1px solid #e2e8f0;">${categoryName}</td>
                        </tr>` : ""}
                        <tr style="background-color: #f8fafc;">
                          <td style="font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Source:</td>
                          <td style="color: #0f172a; border-bottom: 1px solid #e2e8f0;">${source}</td>
                        </tr>
                      </table>

                      ${senderMessage ? `
                      <div style="margin-top: 24px; padding: 16px; background-color: #f8fafc; border-left: 4px solid #0093cb; border-radius: 4px;">
                        <h3 style="margin: 0 0 8px 0; font-size: 14px; color: #334155; font-weight: 600;">Message / Query:</h3>
                        <p style="margin: 0; color: #1e293b; font-size: 14px; line-height: 1.6; white-space: pre-line;">${senderMessage}</p>
                      </div>` : ""}

                      <div style="margin-top: 30px; text-align: center;">
                        ${senderEmail ? `<a href="mailto:${senderEmail}?subject=Re: Your enquiry at Param Corporation" style="background-color: #0093cb; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-size: 14px; font-weight: 600; display: inline-block; margin-right: 8px;">Reply via Email</a>` : ""}
                        ${senderPhone ? `<a href="tel:${senderPhone}" style="background-color: #00a65d; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-size: 14px; font-weight: 600; display: inline-block;">Call Customer</a>` : ""}
                      </div>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8fafc; padding: 16px 30px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center;">
                      <p style="margin: 0;">This email was sent automatically from your website contact form.</p>
                      <p style="margin: 4px 0 0 0;">Recipient: <strong>${TO_EMAIL}</strong></p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject,
      replyTo: senderEmail || undefined,
      html: htmlContent,
    });

    if (error) {
      console.error("Resend error sending contact email:", error);
      return NextResponse.json(
        { error: error.message || "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Email sent successfully", id: data?.id },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("Server error in /api/contact:", err);
    return NextResponse.json(
      { error: err.message || "Internal server error" },
      { status: 500 }
    );
  }
}
