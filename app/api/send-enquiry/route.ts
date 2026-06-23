import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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
      productName,
      productCategory,
    } = body;
    
    // Validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required" },
        { status: 400 },
      );
    }
console.log(process.env.RESEND_API_KEY);
    // Send email to admin
    await resend.emails.send({
      from: "Product Enquiry <enquiries@yourdomain.com>",
      to: "vivek@gourinex-industries.com", // Your sales team email
      subject: `New Enquiry for ${productName} from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>New Product Enquiry</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #0b3c5d; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
                New Product Enquiry
              </h2>
              
              <div style="background: #f8fafc; padding: 20px; border-radius: 10px; margin: 20px 0;">
                <h3 style="color: #0b3c5d; margin-top: 0;">Product Details</h3>
                <p><strong>Product:</strong> ${productName}</p>
                <p><strong>Category:</strong> ${productCategory}</p>
                ${quantity ? `<p><strong>Quantity Required:</strong> ${quantity}</p>` : ""}
              </div>

              <div style="background: #f8fafc; padding: 20px; border-radius: 10px; margin: 20px 0;">
                <h3 style="color: #0b3c5d; margin-top: 0;">Contact Information</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
              </div>

              ${
                message
                  ? `
                <div style="background: #f8fafc; padding: 20px; border-radius: 10px; margin: 20px 0;">
                  <h3 style="color: #0b3c5d; margin-top: 0;">Message</h3>
                  <p>${message}</p>
                </div>
              `
                  : ""
              }

              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b;">
                <p>This enquiry was sent from your website's product page.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // Optional: Send confirmation to customer
    await resend.emails.send({
      from: "Your Company <enquiries@yourdomain.com>",
      to: email,
      subject: `Thank you for your enquiry - ${productName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Enquiry Confirmation</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #0b3c5d;">Thank You for Your Enquiry!</h2>
              
              <p>Dear ${name},</p>
              
              <p>Thank you for your interest in <strong>${productName}</strong>. We have received your enquiry and our team will get back to you within 24 hours.</p>
              
              <div style="background: #f8fafc; padding: 20px; border-radius: 10px; margin: 20px 0;">
                <h3 style="color: #0b3c5d; margin-top: 0;">Your Enquiry Summary</h3>
                <p><strong>Product:</strong> ${productName}</p>
                ${quantity ? `<p><strong>Quantity:</strong> ${quantity}</p>` : ""}
                ${message ? `<p><strong>Message:</strong> ${message}</p>` : ""}
              </div>

              <p>If you have any urgent requirements, feel free to call us directly.</p>
              
              <p>Best regards,<br>Your Company Team</p>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      { message: "Enquiry sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending enquiry:", error);
    return NextResponse.json(
      { error: "Failed to send enquiry" },
      { status: 500 },
    );
  }
}
