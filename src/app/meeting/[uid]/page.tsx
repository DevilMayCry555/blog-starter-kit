import { cookies } from "next/headers";
import req from "@/lib/request";

import "./style.css";
import { notFound } from "next/navigation";

export default async function Meeting({ params }: Params) {
  const token = cookies().get("auth-token");

  if (!token) {
    return notFound();
  }
  if (!["public", "tyd"].includes(params.uid)) {
    return notFound();
  }
  const [userid, username] = JSON.parse(atob(token.value));
  const { data } = await req.get("/api/meeting", {
    params: {
      uid: params.uid,
    },
    headers: {
      ["role-token"]: token?.value,
    },
  });
  const { rows } = data;

  return (
    <main>
      <div className="chat-room min-h-screen flex flex-col">
        <form action="/api/meeting" method="GET" encType="text/plain">
          <input type="text" name="method" defaultValue="create" hidden />
          <input type="text" name="uid" defaultValue={params.uid} hidden />
          <input type="text" name="userid" defaultValue={userid} hidden />
          <input type="text" name="username" defaultValue={username} hidden />
          <div className="input-box">
            <input type="text" name="content" placeholder="请输入消息..." />
            <button type="submit">发送</button>
          </div>
        </form>
        <div className="chat-box flex-1">
          {[].concat(rows).map((row, idx) => {
            const { user_name, content } = row;
            return (
              <div key={idx} className="chat-message">
                <span className="user-name">{user_name}:</span>
                <span className="message-content">{content}</span>
              </div>
            );
          })}
          {/* <div className="chat-message">
            <span className="user-name">王者之剑:</span>
            <span className="message-content">你好，有没有人要组队？</span>
          </div>
          <div className="chat-message">
            <span className="user-name">影之女神:</span>
            <span className="message-content">我想组队，你几级了？</span>
          </div> */}
        </div>
      </div>
    </main>
  );
}
type Params = {
  params: {
    uid: string;
  };
};
