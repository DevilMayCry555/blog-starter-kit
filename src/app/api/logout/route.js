import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {
  cookies().delete("auth-token");
  return NextResponse.redirect(new URL("/", request.url));
}

export async function HEAD(request) {}

export async function POST(request) {}

export async function PUT(request) {}

export async function DELETE(request) {}

export async function PATCH(request) {}

export async function OPTIONS(request) {}
