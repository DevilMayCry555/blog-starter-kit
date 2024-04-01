import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { qs, getuuid } from "@/lib/utils";

const getUsers = () => sql`SELECT * FROM users;`;
const handleCreate = (username: string) =>
  sql`INSERT INTO users (uid,username) VALUES (${getuuid()},${username})`;

export async function GET(request: Request, { params }) {
  const data = await getUsers();

  return NextResponse.json(data, { status: 200 });
}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {
  const body = await request.text();
  const data = qs(body);
  if (data) {
    await handleCreate(data.username);
  }
  return NextResponse.redirect(new URL("/demo", request.url));
}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}

export async function OPTIONS(request: Request) {}
