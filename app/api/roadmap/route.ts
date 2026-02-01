
import { NextResponse } from 'next/server';

const KV_URL = process.env.KV_REST_API_URL;
const KV_TOKEN = process.env.KV_REST_API_TOKEN;

async function kvFetch(command: any[]) {
  if (!KV_URL || !KV_TOKEN) {
    return { result: null, error: 'KV_NOT_CONFIGURED' };
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
    
    if (!response.ok) return { result: null, error: 'KV_API_FAILURE' };
    
    return response.json();
  } catch (err) {
    console.error('Roadmap KV fetch error:', err);
    return { result: null, error: 'FETCH_FAILED' };
  }
}

export async function GET() {
  try {
    const data = await kvFetch(['GET', 'roadmap_state']);
    // Ensure we parse only if result is a string
    const state = (data.result && typeof data.result === 'string') 
      ? JSON.parse(data.result) 
      : { completed: [], ongoing: [] };
      
    return NextResponse.json(state);
  } catch (error) {
    console.error('Roadmap GET Error:', error);
    return NextResponse.json({ completed: [], ongoing: [] });
  }
}

export async function POST(request: Request) {
  try {
    if (!KV_URL || !KV_TOKEN) {
      return NextResponse.json({ 
        error: 'Database Connection Missing. Please configure Vercel KV environment variables to save progress globally.' 
      }, { status: 503 });
    }

    const body = await request.json();
    const { completed, ongoing } = body;

    if (!Array.isArray(completed) || !Array.isArray(ongoing)) {
      return NextResponse.json({ error: 'Invalid data format' }, { status: 400 });
    }

    const res = await kvFetch(['SET', 'roadmap_state', JSON.stringify({ completed, ongoing })]);
    
    if (res.error) {
      return NextResponse.json({ error: 'Failed to write to database.' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Roadmap POST Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
