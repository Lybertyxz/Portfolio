// app/api/visitor.ts
import { NextResponse } from "next/server";
import conn from "@/app/lib/planetscale";

export async function GET() {
  try {
    const result = await getVisitorCount();

    return new NextResponse(JSON.stringify({ count: result.count }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching visitor count", error);
    return new NextResponse(
      JSON.stringify({ error: "Error fetching visitor count" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}

async function getVisitorCount() {
  const result = (await conn.execute(
    "SELECT count FROM visitors LIMIT 1",
  )) as any;
  await conn.execute("UPDATE visitors SET count = count + 1");
  return result.rows[0];
}
