import { cookies } from "next/headers";
import req from "@/lib/request";

import "./style.css";
import { notFound } from "next/navigation";
// import { Reload } from "@/app/_components/reload";

export default async function Meeting({ params }: Params) {
  const token = cookies().get("auth-token");

  if (!token) {
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
        {/* <Reload /> */}
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
          {[]
            .concat(rows)
            .reverse()
            .map((row, idx, ary) => {
              const { user_name, content, create_time } = row;
              return (
                <div key={idx} className="chat-message">
                  <span className="user-name">{user_name}:</span>
                  <div className="message-content">{content}</div>
                  <div className="text-xs text-slate-400">
                    <span>#{ary.length - idx} </span>
                    <span>{create_time}</span>
                  </div>
                </div>
              );
            })}
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
