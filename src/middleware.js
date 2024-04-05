import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { PWD } from "./lib/constants";
// const isDev = process.env.NODE_ENV === "development";
const doors = ["/backdoor/user", "/backdoor/room"];
export function middleware(request) {
  const access = cookies().get("auth-token");
  // console.log("access", access);
  // 未登录
  if (!access) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  const { pathname } = request.nextUrl;
  const [uid] = JSON.parse(atob(access.value));
  const isAdmin =
    doors.includes(pathname) || String(pathname).split("/").includes("posts");
  // 控制台 仅管理员可见
  if (isAdmin && uid !== PWD) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/posts/:slug*", "/backdoor/user", "/backdoor/room"],
};
