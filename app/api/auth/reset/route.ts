
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const KV_URL = process.env.KV_REST_API_URL;
const KV_TOKEN = process.env.KV_REST_API_TOKEN;

async function kvFetch(command: any[]) {
  if (!KV_URL || !KV_TOKEN) {
    console.warn('KV Environment variables are missing. Falling back to defaults.');
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
    
    if (!response.ok) {
      throw new Error(`KV API Error: ${response.statusText}`);
    }
    
    return response.json();
  } catch (err) {
    console.error('kvFetch failed:', err);
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
      let currentPassword = 'roadmapedit';
      try {
        const storedPass = await kvFetch(['GET', 'admin_password']);
        if (storedPass && storedPass.result) {
          currentPassword = storedPass.result;
        }
      } catch (e) {
        console.warn('Using default fallback password');
      }
      
      if (username === 'zubairmur' && password === currentPassword) {
        return NextResponse.json({ success: true });
      }
      return NextResponse.json({ error: 'Invalid credentials. Use zubairmur/roadmapedit' }, { status: 401 });
    }

    // Email-based actions require Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 2. SEND VERIFICATION CODE
    if (action === 'send-code') {
      if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        return NextResponse.json({ error: 'Email provider not configured in .env' }, { status: 500 });
      }

      const generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
      
      // Attempt to store in KV, if available
      await kvFetch(['SETEX', `reset_code_${TARGET_EMAIL}`, 600, generatedCode]);

      await transporter.sendMail({
        from: `"Zubair's Portfolio" <${process.env.EMAIL_USER}>`,
        to: TARGET_EMAIL,
        subject: '🔐 Admin Password Reset Code',
        html: `
          <div style="font-family: 'Inter', sans-serif; background: #020204; color: #f8f9fa; padding: 40px; border-radius: 20px;">
            <h2 style="color: #ffffff; border-bottom: 1px solid #333; padding-bottom: 10px;">Security Verification</h2>
            <p style="color: #9ba1a6;">A password reset was requested for the Roadmap Admin Panel.</p>
            <div style="background: #0a0a0f; padding: 20px; border-radius: 12px; border: 1px solid #222; text-align: center; margin: 30px 0;">
              <span style="font-family: monospace; font-size: 32px; letter-spacing: 10px; font-weight: bold; color: #ffffff;">${generatedCode}</span>
            </div>
            <p style="font-size: 12px; color: #64748b;">This code expires in 10 minutes. If you didn't request this, please ignore this email.</p>
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
      return NextResponse.json({ error: 'Invalid or expired code' }, { status: 400 });
    }

    // 4. RESET PASSWORD
    if (action === 'reset-password') {
      const storedCode = await kvFetch(['GET', `reset_code_${TARGET_EMAIL}`]);
      if (!storedCode || storedCode.result !== code) {
        return NextResponse.json({ error: 'Verification session expired' }, { status: 403 });
      }

      // Update password in KV
      await kvFetch(['SET', 'admin_password', newPassword]);
      await kvFetch(['DEL', `reset_code_${TARGET_EMAIL}`]);

      // Send confirmation
      await transporter.sendMail({
        from: `"Zubair's Portfolio" <${process.env.EMAIL_USER}>`,
        to: TARGET_EMAIL,
        subject: '✅ Password Updated Successfully',
        html: `
          <div style="font-family: 'Inter', sans-serif; background: #020204; color: #f8f9fa; padding: 40px; border-radius: 20px;">
            <h2 style="color: #ffffff;">Password Changed</h2>
            <p style="color: #9ba1a6;">Your Roadmap Admin password has been successfully updated.</p>
            <p style="font-size: 12px; color: #64748b;">Date: ${new Date().toLocaleString()}</p>
          </div>
        `
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Unknown action' }, { status: 400 });
  } catch (error: any) {
    console.error('Auth API Error:', error);
    return NextResponse.json({ 
      error: 'Internal server error', 
      details: error.message 
    }, { status: 500 });
  }
}
