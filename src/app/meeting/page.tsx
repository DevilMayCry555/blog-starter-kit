import { cookies } from "next/headers";
import req from "@/lib/request";

import "./style.css";

export default async function Meeting() {
  const token = cookies().get("auth-token");
  const { data } = await req.get("/api/meeting", {
    params: {
      uid: "tydly",
    },
    headers: {
      ["role-token"]: token?.value,
    },
  });
  const { fields, rows, total } = data;
  return (
    <main>
      <div className="chat-room flex flex-col">
        <div className="chat-box flex-1">
          <div className="chat-message">
            <span className="user-name">王者之剑:</span>
            <span className="message-content">你好，有没有人要组队？</span>
          </div>
          <div className="chat-message">
            <span className="user-name">影之女神:</span>
            <span className="message-content">我想组队，你几级了？</span>
          </div>
        </div>
        <form action="/api/meeting" method="GET" encType="text/plain">
          <input type="text" name="method" defaultValue="create" hidden />
          <div className="input-box">
            <input type="text" name="content" placeholder="请输入消息..." />
            <button type="submit">发送</button>
          </div>
        </form>
      </div>
    </main>
  );
}
