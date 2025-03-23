import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    console.log("📩 API Request Received!");

    const body = await req.json();
    console.log("📩 Request Data:", body);

    const { name, email, mobile, message } = body;

    // ✅ Input Validation
    if (!name || !email || !mobile || !message) {
      console.error("❌ Validation Failed: Missing Fields");
      return NextResponse.json({ success: false, message: "All fields are required!" }, { status: 400 });
    }

    // ✅ Check Environment Variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.ADMIN_EMAIL) {
      console.error("❌ Missing Email Configuration:", {
        EMAIL_USER: process.env.EMAIL_USER,
        EMAIL_PASS: process.env.EMAIL_PASS,
        ADMIN_EMAIL: process.env.ADMIN_EMAIL,
      });
      return NextResponse.json({ success: false, message: "Server email configuration error." }, { status: 500 });
    }

    console.log("📨 Sending Email...");
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      secure: false,
      tls: {
        rejectUnauthorized: false,
      },
    });

    // ✅ Send Email to Admin
    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "📩 New Contact Form Submission",
      html: `<h2>New Contact Submission</h2>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mobile:</strong> ${mobile}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    console.log("✅ Email Sent Successfully!");
    return NextResponse.json({ success: true, message: "Message sent successfully!" });

  } catch (error: any) {
    console.error("🔥 API Error in /api/submit-form:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong!", error: error.message },
      { status: 500 }
    );
  }
}
