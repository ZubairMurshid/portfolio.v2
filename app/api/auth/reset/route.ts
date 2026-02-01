
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const KV_URL = process.env.KV_REST_API_URL;
const KV_TOKEN = process.env.KV_REST_API_TOKEN;

async function kvFetch(command: any[]) {
  if (!KV_URL || !KV_TOKEN) {
    return { result: null };
  }
  
  try {
    const response = await fetch(`${KV_URL}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${KV_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(command),
    });
    return response.json();
  } catch (err) {
    return { result: null };
  }
}

const TARGET_EMAIL = 'zubairmurshid69@gmail.com';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, username, password, code, newPassword } = body;

    // 1. LOGIN ACTION
    if (action === 'login') {
      let currentPassword = 'roadmapedit'; // Default if KV is not set
      
      const storedPass = await kvFetch(['GET', 'admin_password']);
      if (storedPass && storedPass.result) {
        currentPassword = storedPass.result;
      }
      
      if (username === 'zubairmur' && password === currentPassword) {
        return NextResponse.json({ success: true });
      }
      // Secure error message: don't reveal password
      return NextResponse.json({ error: 'Access Denied: Invalid Username or Password' }, { status: 401 });
    }

    // Email provider check
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json({ error: 'Email system not configured.' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 2. SEND VERIFICATION CODE
    if (action === 'send-code') {
      const generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
      await kvFetch(['SETEX', `reset_code_${TARGET_EMAIL}`, 600, generatedCode]);

      await transporter.sendMail({
        from: `"Zubair's Portfolio" <${process.env.EMAIL_USER}>`,
        to: TARGET_EMAIL,
        subject: '🔐 Admin Password Reset Code',
        html: `
          <div style="font-family: sans-serif; background: #020204; color: #f8f9fa; padding: 40px;">
            <h2>Security Verification</h2>
            <p>Your 6-digit code: <strong style="font-size: 24px; color: #0ea5e9;">${generatedCode}</strong></p>
            <p>Expires in 10 minutes.</p>
          </div>
        `
      });
      return NextResponse.json({ success: true });
    }

    // 3. VERIFY CODE
    if (action === 'verify-code') {
      const storedCode = await kvFetch(['GET', `reset_code_${TARGET_EMAIL}`]);
      if (storedCode && storedCode.result === code) {
        return NextResponse.json({ success: true });
      }
      return NextResponse.json({ error: 'Verification code is invalid or has expired.' }, { status: 400 });
    }

    // 4. RESET PASSWORD
    if (action === 'reset-password') {
      const storedCode = await kvFetch(['GET', `reset_code_${TARGET_EMAIL}`]);
      if (!storedCode || storedCode.result !== code) {
        return NextResponse.json({ error: 'Session expired. Please request a new code.' }, { status: 403 });
      }

      await kvFetch(['SET', 'admin_password', newPassword]);
      await kvFetch(['DEL', `reset_code_${TARGET_EMAIL}`]);

      await transporter.sendMail({
        from: `"Zubair's Portfolio" <${process.env.EMAIL_USER}>`,
        to: TARGET_EMAIL,
        subject: '✅ Password Updated Successfully',
        html: `<p>Your Roadmap Admin password was changed successfully.</p>`
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Invalid Action' }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
