import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Here you would integrate with an email service like Resend, SendGrid, or Nodemailer
    // For this portfolio, we will simulate a success response
    
    console.log('Contact form submission:', { name, email, message });

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
