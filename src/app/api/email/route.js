import { NextResponse } from "next/server";
import { qs } from "@/lib/utils";
import nodeMailer from "nodemailer";

const transporter = nodeMailer.createTransport({
  service: "qq",
  // host: "smtp.example.com",
  port: 465,
  secure: true, // use TLS
  auth: {
    user: "1061471799@qq.com",
    pass: "qgcjjjveijsnbfhj", // 授权码
  },
});
const sendAsync = (mail) =>
  new Promise((resolve) => {
    transporter.sendMail(mail, (err, info) => {
      if (!err) {
        resolve({ msg: "验证码发送成功" });
      } else {
        resolve({ msg: "验证码发送失败，请稍后重试" });
      }
    });
  });
// 1904591839
export async function GET(request) {
  const { search } = request.nextUrl;
  const { type = "love" } = qs(search);
  //发送邮件
  const mail = {
    to: "1061471799@qq.com", //收件人，这里由post请求传递过来
  };
  // 邮件内容，用html格式编写
  if (type === "love") {
    Object.assign(mail, {
      from: `"溜溜洋"<1061471799@qq.com>`, // 发件人
      subject: "open the door", //邮箱主题
      html: `
        <p>您好！</p>
        <p>您的验证码是：<strong style="color:orangered;">2333</strong></p>
        <p>如果不是您本人操作，请无视此邮件</p>
    `,
    });
  }
  const res = await sendAsync(mail);
  return NextResponse.json(
    {
      data: true,
      ...res,
    },
    { status: 200 }
  );
}

export async function HEAD(request) {}

export async function POST(request) {}

export async function PUT(request) {}

export async function DELETE(request) {}

export async function PATCH(request) {}

export async function OPTIONS(request) {}
