import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.ADMIN_EMAIL || "sanchay@paramcorp.in";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "Param Corporation <contact@paramcorp.in>";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      company,
      message,
      quantity,
      productName = "Product",
      productCategory = "General",
    } = body;
    
    // Validation
    if (!name || (!email && !phone)) {
      return NextResponse.json(
        { error: "Name and email or phone are required" },
        { status: 400 },
      );
    }

    // Send email to admin
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email || undefined,
      subject: `[Product Enquiry] ${productName} from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>New Product Enquiry</title>
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
                        <p style="color: rgba(255, 255, 255, 0.9); margin: 6px 0 0 0; font-size: 14px;">Product Enquiry Notification</p>
                      </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                      <td style="padding: 30px;">
                        <div style="background: #f8fafc; padding: 20px; border-radius: 10px; margin: 0 0 20px 0; border: 1px solid #e2e8f0;">
                          <h3 style="color: #0093cb; margin-top: 0; margin-bottom: 12px; font-size: 16px;">Product Details</h3>
                          <p style="margin: 6px 0;"><strong>Product:</strong> ${productName}</p>
                          <p style="margin: 6px 0;"><strong>Category:</strong> ${productCategory}</p>
                          ${quantity ? `<p style="margin: 6px 0;"><strong>Quantity Required:</strong> ${quantity}</p>` : ""}
                        </div>

                        <div style="background: #f8fafc; padding: 20px; border-radius: 10px; margin: 0 0 20px 0; border: 1px solid #e2e8f0;">
                          <h3 style="color: #0093cb; margin-top: 0; margin-bottom: 12px; font-size: 16px;">Customer Contact Information</h3>
                          <p style="margin: 6px 0;"><strong>Name:</strong> ${name}</p>
                          <p style="margin: 6px 0;"><strong>Email:</strong> ${email ? `<a href="mailto:${email}" style="color: #0093cb;">${email}</a>` : "N/A"}</p>
                          <p style="margin: 6px 0;"><strong>Phone:</strong> ${phone ? `<a href="tel:${phone}" style="color: #0093cb;">${phone}</a>` : "N/A"}</p>
                          ${company ? `<p style="margin: 6px 0;"><strong>Company:</strong> ${company}</p>` : ""}
                        </div>

                        ${
                          message
                            ? `
                          <div style="background: #f8fafc; padding: 20px; border-radius: 10px; margin: 0 0 20px 0; border-left: 4px solid #0093cb;">
                            <h3 style="color: #0f172a; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Message / Requirement</h3>
                            <p style="margin: 0; line-height: 1.6; white-space: pre-line;">${message}</p>
                          </div>
                        `
                            : ""
                        }

                        <div style="margin-top: 24px; text-align: center;">
                          ${email ? `<a href="mailto:${email}?subject=Re: Your enquiry for ${productName}" style="background-color: #0093cb; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-size: 14px; font-weight: 600; display: inline-block; margin-right: 8px;">Reply to Customer</a>` : ""}
                          ${phone ? `<a href="tel:${phone}" style="background-color: #00a65d; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-size: 14px; font-weight: 600; display: inline-block;">Call Customer</a>` : ""}
                        </div>
                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td style="background-color: #f8fafc; padding: 16px 30px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center;">
                        <p style="margin: 0;">This enquiry was sent from the Param Corporation product page.</p>
                        <p style="margin: 4px 0 0 0;">Recipient: <strong>${TO_EMAIL}</strong></p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to send enquiry" },
        { status: 500 },
      );
    }

    // Optional customer acknowledgement (safely catch if domain not verified for customer email)
    if (email) {
      try {
        await resend.emails.send({
          from: FROM_EMAIL,
          to: email,
          subject: `Thank you for your enquiry - ${productName} | Param Corporation`,
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="utf-8">
                <title>Enquiry Confirmation</title>
              </head>
              <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px;">
                <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; padding: 24px;">
                  <h2 style="color: #0093cb; margin-top: 0;">Thank You for Your Enquiry!</h2>
                  
                  <p>Dear ${name},</p>
                  
                  <p>Thank you for your interest in <strong>${productName}</strong>. We have received your enquiry and our team will get back to you within 24 hours.</p>
                  
                  <div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0; border: 1px solid #e2e8f0;">
                    <h3 style="color: #0f172a; margin-top: 0; font-size: 14px;">Enquiry Summary:</h3>
                    <p style="margin: 4px 0;"><strong>Product:</strong> ${productName}</p>
                    ${quantity ? `<p style="margin: 4px 0;"><strong>Quantity:</strong> ${quantity}</p>` : ""}
                    ${message ? `<p style="margin: 4px 0;"><strong>Message:</strong> ${message}</p>` : ""}
                  </div>

                  <p>For urgent requirements, please contact us at <a href="mailto:${TO_EMAIL}" style="color: #0093cb;">${TO_EMAIL}</a> or call <strong>+91 98201 49950</strong>.</p>
                  
                  <p style="margin-bottom: 0;">Warm regards,<br><strong>Param Corporation Team</strong><br><a href="https://paramcorp.in" style="color: #0093cb; text-decoration: none;">www.paramcorp.in</a></p>
                </div>
              </body>
            </html>
          `,
        });
      } catch (confirmErr) {
        // Non-fatal if domain is unverified in testing mode
        console.warn("Customer confirmation email could not be sent (non-fatal):", confirmErr);
      }
    }

    return NextResponse.json(
      { success: true, message: "Enquiry sent successfully", id: data?.id },
      { status: 200 },
    );
  } catch (error: any) {
    console.error("Error sending enquiry:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to send enquiry" },
      { status: 500 },
    );
  }
}
