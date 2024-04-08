import { notFound } from "next/navigation";

import "./style.css";
import { fetchChats, fetchSelf } from "@/lib/sql";
// import { WSClient } from "@/app/_components/ws-client";
const format_name = (name = "robot") =>
  name
    .split("_")
    .map((it, idx) => (idx > 0 ? "*" : it))
    .join(" ");
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
  const userinfo = await fetchSelf();
  if (!userinfo) {
    return notFound();
  }
  const roomid = decodeURIComponent(params.uid);
  const { uid: userid, username } = userinfo;
  const data = await fetchChats(roomid);
  if (!data) {
    return notFound();
  }
  const { rows } = data;
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
            <div key={idx} className="chat-message">
              <div className="user-name">{format_name(user_name)}:</div>
              <div className="message-content">{content}</div>
              <div className="text-xs text-slate-400 flex justify-between">
                <span>{create_time}</span>
                <span>#{ary.length - idx} </span>
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
