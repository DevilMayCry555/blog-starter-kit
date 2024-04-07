"use client";

import { useEffect, useState } from "react";
import request from "@/lib/request";

const format_name = (name = "robot") =>
  name
    .split("_")
    .map((it, idx) => (idx > 0 ? "*" : it))
    .join("");
export default function Preview({ formData, token }: any) {
  const [text, setText] = useState("");
  const [rows, setRows] = useState([]);
  const run = async () => {
    const { data } = await request.get("/api/meeting", {
      params: {
        uid: formData.uid,
      },
      headers: {
        "Content-tyd": token,
      },
    });
    setRows(data.rows);
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(run());
      }, 1000);
    });
  };
  const submit = async () => {
    console.log("submit");
    const content = text;
    setText("");
    await request.get("/api/meeting", {
      params: {
        ...formData,
        content,
      },
    });
  };
  useEffect(() => {
    run();
  }, []);

  return (
    <>
      <form
        action="/api/meeting"
        method="GET"
        encType="text/plain"
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
      >
        <div className="input-box">
          <input
            type="text"
            name="content"
            placeholder="请输入消息..."
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">发送</button>
        </div>
      </form>
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
    </>
  );
}
