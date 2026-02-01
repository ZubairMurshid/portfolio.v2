
import { NextResponse } from 'next/server';

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
    console.error('Roadmap KV fetch error:', err);
    return { result: null };
  }
}

export async function GET() {
  try {
    const data = await kvFetch(['GET', 'roadmap_state']);
    const state = data.result ? JSON.parse(data.result) : { completed: [], ongoing: [] };
    return NextResponse.json(state);
  } catch (error) {
    console.error('Roadmap GET Error:', error);
    return NextResponse.json({ completed: [], ongoing: [] });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { completed, ongoing } = body;

    if (!Array.isArray(completed) || !Array.isArray(ongoing)) {
      return NextResponse.json({ error: 'Invalid data format' }, { status: 400 });
    }

    const res = await kvFetch(['SET', 'roadmap_state', JSON.stringify({ completed, ongoing })]);
    
    if (res.result === null && (!KV_URL || !KV_TOKEN)) {
      return NextResponse.json({ 
        error: 'Vercel KV is not configured. Progress can only be saved to local storage.',
        isLocalOnly: true
      }, { status: 200 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Roadmap POST Error:', error);
    return NextResponse.json({ error: 'Failed to update state' }, { status: 500 });
  }
}
