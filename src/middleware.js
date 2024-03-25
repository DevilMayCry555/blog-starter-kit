import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

export async function middleware(request) {
  //   return NextResponse.redirect(new URL("/", request.url));
  const { search } = request.nextUrl;
  const params = `${search}`
    .slice(1)
    .split("&")
    .reduce((a, b) => {
      const [key, val] = b.split("=");
      return {
        ...a,
        [key]: val,
      };
    }, null);
  if (params.key) {
    await put("visitor.txt", `${request.ip ?? "unknow"} ${request.url}`, {
      access: "public",
    });
  }
}

export const config = {
  matcher: "/posts/:slug*",
};
