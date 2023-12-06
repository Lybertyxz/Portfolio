import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

// This function handles the POST request
export async function POST() {
  try {
    // Update the visitor count
    await sql`UPDATE Visitors SET count = count + 1`;

    // Retrieve the updated count
    const result = await sql`SELECT count FROM Visitors`;
    const count = result.rows[0].count;

    // Return the updated count
    return new NextResponse(JSON.stringify({ count }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Database error:', error);
    return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

// This function handles the GET request
export async function GET() {
  try {
    // Retrieve the current count
    const result = await sql`SELECT count FROM Visitors`;
    const count = result.rows[0].count;

    // Return the current count
    return new NextResponse(JSON.stringify({ count }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Database error:', error);
    return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
