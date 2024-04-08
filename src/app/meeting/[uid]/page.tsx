import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { Image } from "react-bootstrap";

import "./style.css";
import { fetchChats } from "@/lib/sql";
// import { WSClient } from "@/app/_components/ws-client";
const format_name = (name = "robot") =>
  name
    .split("_")
    .map((it, idx) => (idx > 0 ? "*" : it))
    .join("_");
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
        <input
          type="text"
          name="content"
          required
          placeholder="请输入消息..."
        />
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
  const data = await fetchChats(params.uid);
  if (!data) {
    return notFound();
  }
  const { rows } = data;
  const [userid, username] = JSON.parse(atob(token.value));
  const formData = {
    method: "create",
    userid,
    username,
    uid: params.uid,
  };
  return (
    <div className="chat-room min-h-screen flex flex-col">
      <Send formData={formData} />
      <div className="chat-box flex-1">
        {rows.reverse().map((row, idx, ary) => {
          const { user_name, content, create_time } = row;
          return (
            <div key={idx} className="chat-message relative">
              <Image
                className="absolute h-full top-0 left-0 -z-10"
                src="/assets/room/container.png"
              />
              <div className="user-name">{format_name(user_name)}:</div>
              <div className="message-content">{content}</div>
              <div className="opacity-0">zsbd</div>
              <div className="text-xs text-slate-400 absolute bottom-0 left-0">
                <span>#{ary.length - idx} </span>
                <span>{create_time}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
type Params = {
  params: {
    uid: string;
  };
};
