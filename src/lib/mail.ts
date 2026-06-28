import { createServerFn } from "@tanstack/react-start";

export const sendEmailFn = createServerFn({ method: "POST" })
  .validator((d: { name: string; email: string; subject?: string; message: string }) => d)
  .handler(async ({ data }) => {
    const { name, email, subject, message } = data;

    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_APP_PASSWORD;
    const receiver = process.env.CONTACT_RECEIVER_EMAIL || user;

    if (!user || !pass) {
      console.error("Missing SMTP credentials (GMAIL_USER / GMAIL_APP_PASSWORD). Please check your .env file.");
      throw new Error("SMTP credentials are not configured.");
    }

    // Dynamically import nodemailer to avoid bundling it in the browser build
    const nodemailer = await import("nodemailer");
    const createTransport = nodemailer.createTransport || (nodemailer as any).default?.createTransport;

    if (!createTransport) {
      throw new Error("Failed to load nodemailer.createTransport function");
    }

    const transporter = createTransport({
      service: "gmail",
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      replyTo: email,
      to: receiver,
      subject: subject || `New contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f4f5; padding: 40px 20px; color: #18181b; line-height: 1.5;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
            <div style="background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%); padding: 32px 24px; text-align: center; color: #ffffff;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.025em; color: #ffffff;">New Contact Request</h1>
              <p style="margin: 8px 0 0 0; font-size: 15px; opacity: 0.9; color: #ffffff;">Someone reached out from your portfolio</p>
            </div>
            <div style="padding: 32px 24px;">
              <div style="margin-bottom: 24px;">
                <span style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #71717a; font-weight: 600; display: block; margin-bottom: 4px;">Name</span>
                <div style="font-size: 16px; color: #27272a; font-weight: 500;">${name}</div>
              </div>
              <div style="margin-bottom: 24px;">
                <span style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #71717a; font-weight: 600; display: block; margin-bottom: 4px;">Email</span>
                <div style="font-size: 16px; font-weight: 500;"><a href="mailto:${email}" style="color: #6366f1; text-decoration: none;">${email}</a></div>
              </div>
              <div style="margin-bottom: 24px;">
                <span style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #71717a; font-weight: 600; display: block; margin-bottom: 4px;">Subject</span>
                <div style="font-size: 16px; color: #27272a; font-weight: 500;">${subject || 'No Subject Provided'}</div>
              </div>
              <div style="margin-bottom: 8px;">
                <span style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #71717a; font-weight: 600; display: block; margin-bottom: 8px;">Message</span>
                <div style="background-color: #f4f4f5; border-radius: 12px; padding: 16px; font-size: 15px; color: #3f3f46; line-height: 1.6; white-space: pre-wrap; border: 1px solid #e4e4e7;">${message}</div>
              </div>
            </div>
            <div style="padding: 24px; text-align: center; font-size: 13px; color: #a1a1aa; border-top: 1px solid #f4f4f5; background-color: #fafafa;">
              This email was sent automatically from your portfolio's contact form.
            </div>
          </div>
        </div>
      `,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent successfully:", info.messageId);
      return { success: true, messageId: info.messageId };
    } catch (error) {
      console.error("Error sending email:", error);
      throw new Error(error instanceof Error ? error.message : "Failed to send email");
    }
  });
