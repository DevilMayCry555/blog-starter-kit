import { NextResponse } from "next/server";
import { cookies, headers } from "next/headers";
import { PWD } from "./lib/constants";
// const isDev = process.env.NODE_ENV === "development";
export function middleware(request) {
  const access = !!headers().get("Content-tyd")
    ? {
        value: headers().get("Content-tyd"),
      }
    : cookies().get("auth-token");
  // console.log("access", access);
  // 未登录
  if (!access) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  // 仅管理员
  const [uid] = JSON.parse(atob(access.value));
  if (uid !== PWD) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/posts/:slug*", "/backdoor/:door*", "/api/:api*"],
};
