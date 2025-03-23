import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import admin from "firebase-admin";
import dotenv from "dotenv";

dotenv.config();

// ✅ Load Firebase Admin SDK
import serviceAccount from "../../../firebase-admin-sdk.json.json";

// ✅ Initialize Firebase (Only Once)
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  });
}

const db = admin.firestore();

// ✅ Setup Nodemailer Transporter (Gmail SMTP)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  secure: true, // Ensure secure connection
});

// ✅ Alternative: Mailtrap SMTP (For Testing)
/*
const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
});
*/

export async function POST(req: NextRequest) {
  try {
    const { name, email, mobile, message } = await req.json();

    // ✅ Save to Firestore
    await db.collection("contact_messages").add({
      name,
      email,
      mobile,
      message,
      createdAt: new Date(),
    });

    // ✅ Send Email to Admin
    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
      to: "business@spruntler.com",
      subject: "New Contact Form Submission",
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mobile:</strong> ${mobile}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    // ✅ Send Confirmation Email to User
    await transporter.sendMail({
      from: `"Support Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting us!",
      html: `<p>Dear ${name},</p>
             <p>We have received your message and will get back to you shortly.</p>
             <p>Best Regards,<br>Your Company</p>`,
    });

    return NextResponse.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, message: "Something went wrong!" }, { status: 500 });
  }
}
