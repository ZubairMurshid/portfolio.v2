
import { NextResponse } from 'next/server';

const KV_URL = process.env.KV_REST_API_URL;
const KV_TOKEN = process.env.KV_REST_API_TOKEN;

async function kvFetch(command: any[]) {
  const response = await fetch(`${KV_URL}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${KV_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(command),
  });
  return response.json();
}

export async function GET() {
  try {
    const data = await kvFetch(['GET', 'roadmap_state']);
    const state = data.result ? JSON.parse(data.result) : { completed: [], ongoing: [] };
    return NextResponse.json(state);
  } catch (error) {
    console.error('KV GET Error:', error);
    return NextResponse.json({ completed: [], ongoing: [] });
  }
}

export async function POST(request: Request) {
  try {
    // Basic auth check (should ideally use a proper session/token)
    // For now, we assume the admin panel sends a valid request
    const body = await request.json();
    const { completed, ongoing } = body;

    if (!Array.isArray(completed) || !Array.isArray(ongoing)) {
      return NextResponse.json({ error: 'Invalid data format' }, { status: 400 });
    }

    await kvFetch(['SET', 'roadmap_state', JSON.stringify({ completed, ongoing })]);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('KV SET Error:', error);
    return NextResponse.json({ error: 'Failed to update state' }, { status: 500 });
  }
}
