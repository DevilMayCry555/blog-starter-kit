import { NextResponse } from "next/server";
import { get } from "@vercel/edge-config";

export async function middleware(request) {
  const { search, origin, pathname } = request.nextUrl;
  const refer = `${origin}${pathname}`;
  const params = `${search}`
    .replace("?", "")
    .split("&")
    .reduce((a, b) => {
      const [key, val] = b.split("=");
      return {
        ...a,
        [key]: val,
      };
    }, null);
  const PWD = await get("pwd");
  if (decodeURIComponent(params.auth_token) !== btoa(PWD)) {
    return NextResponse.redirect(new URL(`/auth?from=${refer}`, origin));
  }
}

export const config = {
  matcher: "/posts/:slug*",
};
