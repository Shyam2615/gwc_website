import nodemailer from "nodemailer";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    if (!email || !message) {
      return new Response(JSON.stringify({ error: "Email and message are required" }), {
        status: 400,
      });
    }

    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_APP_PASSWORD;
    const to = process.env.CONTACT_RECIPIENT || user;

    if (!user || !pass || !to) {
      console.error("Missing email environment variables");
      return new Response(JSON.stringify({ error: "Email not configured" }), {
        status: 500,
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: `"GWC Website" <${user}>`,
      to,
      replyTo: email,
      subject: subject ? `[GWC Contact] ${subject}` : "[GWC Contact] New message",
      text: `
Name: ${name || "N/A"}
Email: ${email}
Phone: ${phone || "N/A"}

Message:
${message}
      `.trim(),
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return new Response(JSON.stringify({ error: "Failed to send message" }), {
      status: 500,
    });
  }
}


