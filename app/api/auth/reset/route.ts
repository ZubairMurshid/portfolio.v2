
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { createClient } from 'redis';

async function getRedisClient() {
  const client = createClient({
    url: process.env.REDIS_URL || process.env.KV_REST_API_URL || ''
  });
  await client.connect();
  return client;
}

const TARGET_EMAIL = 'zubairmurshid69@gmail.com';

export async function POST(request: Request) {
  let client;
  try {
    const body = await request.json();
    const { action, username, password, code, newPassword } = body;

    // Connect to Redis for all actions
    if (process.env.REDIS_URL || process.env.KV_REST_API_URL) {
      client = await getRedisClient();
    }

    // 1. LOGIN ACTION
    if (action === 'login') {
      let currentPassword = 'roadmapedit'; 
      
      try {
        if (client) {
          const storedPass = await client.get('admin_password');
          if (storedPass) currentPassword = storedPass;
        }
      } catch (e) {
        console.warn('Auth: Redis unreachable, using default password.');
      }
      
      if (username === 'zubairmur' && password === currentPassword) {
        return NextResponse.json({ success: true });
      }
      return NextResponse.json({ error: 'Invalid credentials. Please try again.' }, { status: 401 });
    }

    // Email service configuration check
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json({ error: 'Email service not configured.' }, { status: 500 });
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
      
      if (client) {
        // Set with 10 minute expiry (600 seconds)
        await client.set(`reset_code_${TARGET_EMAIL}`, generatedCode, {
          EX: 600
        });
      }

      await transporter.sendMail({
        from: `"Zubair's Portfolio" <${process.env.EMAIL_USER}>`,
        to: TARGET_EMAIL,
        subject: '🔐 Admin Password Reset Code',
        html: `<p>Your verification code: <strong style="font-size:20px;">${generatedCode}</strong></p>`
      });
      return NextResponse.json({ success: true });
    }

    // 3. VERIFY CODE
    if (action === 'verify-code') {
      if (!client) return NextResponse.json({ error: 'Database not connected' }, { status: 500 });
      
      const storedCode = await client.get(`reset_code_${TARGET_EMAIL}`);
      if (storedCode && String(storedCode) === code) {
        return NextResponse.json({ success: true });
      }
      return NextResponse.json({ error: 'Code is incorrect or expired.' }, { status: 400 });
    }

    // 4. RESET PASSWORD
    if (action === 'reset-password') {
      if (!client) return NextResponse.json({ error: 'Database not connected' }, { status: 500 });

      const storedCode = await client.get(`reset_code_${TARGET_EMAIL}`);
      if (!storedCode || String(storedCode) !== code) {
        return NextResponse.json({ error: 'Session expired.' }, { status: 403 });
      }

      await client.set('admin_password', newPassword);
      await client.del(`reset_code_${TARGET_EMAIL}`);

      await transporter.sendMail({
        from: `"Zubair's Portfolio" <${process.env.EMAIL_USER}>`,
        to: TARGET_EMAIL,
        subject: '✅ Password Reset Successful',
        html: `<p>Your admin password has been changed successfully.</p>`
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Unknown Action' }, { status: 400 });
  } catch (error: any) {
    console.error('Auth API Error:', error.message);
    return NextResponse.json({ error: 'Server processing error.' }, { status: 500 });
  } finally {
    if (client) {
      try {
        await client.disconnect();
      } catch (e) {
        // Ignore disconnect errors
      }
    }
  }
}
