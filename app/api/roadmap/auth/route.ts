
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Simple in-memory store for verification codes (for demonstration)
const codeStore = new Map<string, string>();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, email, code, newPassword } = body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    if (action === 'send-code') {
      const generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
      codeStore.set(email, generatedCode);

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Roadmap Admin Verification Code',
        text: `Your 6-digit verification code is: ${generatedCode}`,
        html: `<div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
                <h2>Verification Code</h2>
                <p>Use the following code to reset your roadmap admin password:</p>
                <h1 style="color: #0ea5e9; letter-spacing: 5px;">${generatedCode}</h1>
              </div>`
      });

      return NextResponse.json({ success: true });
    }

    if (action === 'verify-code') {
      const storedCode = codeStore.get(email);
      if (storedCode === code) {
        return NextResponse.json({ success: true });
      }
      return NextResponse.json({ error: 'Invalid code' }, { status: 400 });
    }

    if (action === 'reset-password') {
      // In a real app, you'd update a database here.
      // We will just send a confirmation email.
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Password Changed Successfully',
        text: 'Your roadmap admin password has been successfully updated.',
        html: `<div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
                <h2>Security Update</h2>
                <p>The password for your Roadmap Admin Panel was successfully changed.</p>
                <p>If you did not perform this action, please contact support immediately.</p>
              </div>`
      });
      codeStore.delete(email);
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    console.error('Auth API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
