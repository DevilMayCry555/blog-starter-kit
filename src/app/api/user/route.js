import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { qs, getuuid } from "@/lib/utils";
import { format } from "date-fns";

const testPassword = new RegExp(/^[A-Za-z0-9]+$/);

export async function GET(request) {
  const { search } = request.nextUrl;
  const { method, ...rest } = qs(search);

  if (method === "delete") {
    await sql`DELETE FROM users WHERE uid = ${rest.uid};`;
  }
  if (method === "register") {
    const { username, email, password, authcode } = rest;
    if (authcode !== "221b") {
      return NextResponse.json(
        {
          msg: "授权码错误",
        },
        { status: 400 }
      );
    }
    if (!testPassword.test(password)) {
      return NextResponse.json(
        {
          msg: "密码只能由数字和字母组成",
        },
        { status: 400 }
      );
    }
    const time = format(new Date(), "yyyy-MM-dd HH:mm:ss");
    const uid = btoa(password);
    try {
      await sql`INSERT INTO users (uid,username,create_time,admin)
      VALUES (${uid},${username},${time},${0});`;
      await sql`INSERT INTO email (uid,url)
      VALUES (${uid},${email});`;
    } catch (e) {
      return NextResponse.json(
        {
          msg: "密码过于简单，请重新注册",
        },
        { status: 400 }
      );
    }
  }
  if (method === "update") {
    const { uid, birthday, username, email } = rest;
    await sql`UPDATE users SET
    birthday = ${birthday},
    username= ${username}
    WHERE uid = ${uid};`;
    try {
      await sql`INSERT INTO email (uid,url)
      VALUES (${uid},${email});`;
    } catch (e) {
      await sql`UPDATE email SET
      url= ${email}
      WHERE uid = ${uid};`;
    }
    return NextResponse.redirect(new URL("/", request.url));
  }
  // 切换管理员状态
  if (method === "admin") {
    const { uid, admin } = rest;
    await sql`UPDATE users SET
    admin = ${Number(admin) ? 0 : 1}
    WHERE uid = ${uid};`;
  }
  return NextResponse.redirect(new URL("/backdoor/user", request.url));
}

export async function HEAD(request) {}

export async function POST(request) {}

export async function PUT(request) {}

export async function DELETE(request) {}

export async function PATCH(request) {}

export async function OPTIONS(request) {}
