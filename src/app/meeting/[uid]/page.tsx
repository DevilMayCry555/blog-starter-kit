import { cookies } from "next/headers";
import req from "@/lib/request";

import "./style.css";
import { notFound } from "next/navigation";
// import { Reload } from "@/app/_components/reload";
const Send = ({ formData }: { formData: { [k: string]: any } }) => {
  return (
    <form action="/api/meeting" method="GET" encType="text/plain">
      {Object.entries({ ...formData }).map((it) => {
        const [key, val] = it;
        return (
          <input key={key} type="text" name={key} defaultValue={val} hidden />
        );
      })}
      <div className="input-box">
        <input type="text" name="content" placeholder="请输入消息..." />
        <button type="submit">发送</button>
      </div>
    </form>
  );
};
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
  });
  const formData = {
    method: "create",
    userid,
    username,
    uid: params.uid,
  };
  const { rows } = data;
  const format_name = (name = "robot") =>
    name
      .split("_")
      .map((it, idx) => (idx > 0 ? "*" : it))
      .join("");
  return (
    <main>
      <div className="chat-room min-h-screen">
        {/* <Reload /> */}
        <Send formData={formData} />
        <div className="chat-box">
          {[]
            .concat(rows)
            .reverse()
            .map((row, idx, ary) => {
              const { user_name, content, create_time } = row;
              return (
                <div key={idx} className="chat-message">
                  <span className="user-name">{format_name(user_name)}:</span>
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
