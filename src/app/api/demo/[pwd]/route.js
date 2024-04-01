import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { PWD } from "@/lib/constants";

export async function GET(request, { params }) {
  const { pwd } = params;
  const find = PWD.find((it) => it.base64 === pwd);
  if (find) {
    cookies().set({
      name: "auth-token",
      value: find.role,
      httpOnly: true,
      maxAge: 7 * 24 * 3600,
    });
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.redirect(new URL("/login", request.url));
}

export async function HEAD(request) {}

export async function POST(request) {}

export async function PUT(request) {}

export async function DELETE(request) {}

export async function PATCH(request) {}

export async function OPTIONS(request) {}
