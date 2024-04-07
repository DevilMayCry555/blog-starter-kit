import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { PWD } from "./lib/constants";
// const isDev = process.env.NODE_ENV === "development";
export function middleware(request) {
  const access = cookies().get("auth-token");
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
  matcher: ["/posts/:slug*", "/backdoor/user", "/backdoor/room"],
};
