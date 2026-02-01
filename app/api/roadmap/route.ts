
import { NextResponse } from 'next/server';
import { createClient } from 'redis';

async function getRedisClient() {
  const client = createClient({
    url: process.env.REDIS_URL || process.env.KV_REST_API_URL || ''
  });
  client.on('error', (err) => console.error('Redis Client Error', err));
  await client.connect();
  return client;
}

export async function GET() {
  let client;
  try {
    if (!process.env.REDIS_URL && !process.env.KV_REST_API_URL) {
      return NextResponse.json({ completed: [], ongoing: [] });
    }
    
    client = await getRedisClient();
    const state = await client.get('roadmap_state');
    
    if (!state) {
      return NextResponse.json({ completed: [], ongoing: [] });
    }
    
    return NextResponse.json(JSON.parse(state));
  } catch (error: any) {
    console.error('Roadmap GET Error:', error.message);
    return NextResponse.json({ completed: [], ongoing: [] });
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

export async function POST(request: Request) {
  let client;
  try {
    const body = await request.json();
    const { completed, ongoing } = body;

    if (!Array.isArray(completed) || !Array.isArray(ongoing)) {
      return NextResponse.json({ error: 'Invalid data format' }, { status: 400 });
    }

    if (!process.env.REDIS_URL && !process.env.KV_REST_API_URL) {
      return NextResponse.json({ error: 'Redis configuration missing' }, { status: 500 });
    }

    client = await getRedisClient();
    await client.set('roadmap_state', JSON.stringify({ completed, ongoing }));

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Roadmap POST Error:', error.message);
    return NextResponse.json({ 
      error: 'Failed to sync with Redis.',
      details: error.message 
    }, { status: 500 });
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
