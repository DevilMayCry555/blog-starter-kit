import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const res = await Promise.resolve({
    key: "demo",
  });
  return NextResponse.json(res, { status: 200 });
}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}

export async function OPTIONS(request: Request) {}
