import { cookies } from "next/headers";
import { NextResponse } from "next/server";
// import { get } from "@vercel/edge-config";
import { PWD } from "@/lib/constants";

export async function GET(request, context) {
  const { pwd } = context.params;
  // const PWD = await get("pwd");
  if (pwd === btoa(`${PWD}`)) {
    cookies().set({
      name: "auth-token",
      value: pwd,
      httpOnly: true,
      maxAge: 7 * 24 * 3600,
    });
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.json("Incorrect password !");
}

export async function HEAD(request) {}

export async function POST(request) {}

export async function PUT(request) {}

export async function DELETE(request) {}

export async function PATCH(request) {}

export async function OPTIONS(request) {}
