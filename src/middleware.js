import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

export async function middleware(request) {
  //   return NextResponse.redirect(new URL("/", request.url));
  await put("visitor.txt", `${request.ip ?? "unknow"}`, {
    access: "public",
  });
}

export const config = {
  matcher: "/posts/:slug*",
};
