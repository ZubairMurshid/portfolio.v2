
import { NextResponse } from 'next/server';
import { Review } from '@/lib/types';

// In-memory storage for demonstration (resets on server restart)
let reviews: Review[] = [
  {
    id: '1',
    name: 'Abdullah Farhan',
    profession: 'UX Designer',
    rating: 5,
    comment: 'The particle effects are absolutely stunning. Smooth navigation too!',
    tags: ['Design', 'Performance'],
    date: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Sahan Liyanage',
    profession: 'Frontend Engineer',
    rating: 5,
    comment: 'Clean code structure and amazing use of Framer Motion.',
    tags: ['Code Quality', 'Creativity'],
    date: new Date(Date.now() - 86400000).toISOString()
  }
];

export async function GET() {
  return NextResponse.json(reviews);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, profession, rating, comment, tags } = body;

    // Comment is now optional
    if (!name || !rating) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newReview: Review = {
      id: Math.random().toString(36).substring(7),
      name,
      profession: profession || 'Visitor',
      rating,
      comment: comment || '', // Allow empty comments
      tags: tags || [],
      date: new Date().toISOString(),
    };

    // Add to beginning of array
    reviews.unshift(newReview);

    return NextResponse.json(newReview);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to post review' }, { status: 500 });
  }
}
