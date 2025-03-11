import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Only initialize Resend if the API key is available
const apiKey = process.env.RESEND_API_KEY;
const resend = apiKey ? new Resend(apiKey) : null;

export async function POST(request: Request) {
  try {
    // Check if Resend is properly initialized
    if (!resend) {
      console.error('RESEND_API_KEY is missing from environment variables');
      return NextResponse.json(
        { success: false, error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { size, name, phone, email, service, message } = body;

    const { data, error } = await resend.emails.send({
      from: 'Sarker Siivous Website <noreply@sarkersiivous.fi>',
      to: 'myynti@sarkersiivous.fi',
      subject: `New Cleaning Quote Request from ${name}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>House Size:</strong> ${size}m²</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Error sending email' },
      { status: 500 }
    );
  }
}
