"use client";

import { BASE_URL, OPENAI_API_KEY_HIGH } from "@/lib/constants";
import { REQ } from "@/lib/req";
import { useEffect, useState } from "react";
import { ProgressBar, Spinner } from "react-bootstrap";

const decoder = new TextDecoder("utf-8");
export default function Chat() {
  const [text, setText] = useState("nice to meet you");
  const [input, setInput] = useState("");
  const [me, setme] = useState(["hello"] as string[]);
  const [ai, setai] = useState([] as string[]);
  const [loading, set_loading] = useState(false);
  const [usage, set_usage] = useState(0);
  const handleInputChange = (e: any) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (loading) {
      return;
    }
    setText("");
    setInput("");
    set_loading(true);
    setme((state) => state.concat([input]));
    setai((state) => state.concat([text]));
    const response = await fetchData(input);
    const reader = response.body!.getReader();
    reader.read().then(function process({ done, value }): any {
      if (done) {
        console.log("Stream finished");
        set_loading(false);
        return;
      }
      const slice = decoder.decode(value);
      console.log("Received data chunk", slice);

      setText((value) => {
        return value + slice;
      });
      const bottom = document.getElementById("chat_bottom");
      bottom!.scrollIntoView();

      return reader.read().then(process);
    });
  };

  const fetchData = async (inputs: string) => {
    // console.log(me, ai);
    const history: any[] = [];
    me.forEach((it, idx) => {
      if (it) {
        history.push({ role: "user", content: it });
      }
      if (ai[idx]) {
        history.push({ role: "system", content: ai[idx] });
      }
    });
    history.push({ role: "system", content: text });
    history.push({ role: "user", content: inputs });
    const response = await fetch(BASE_URL + "/api/stream", {
      method: "POST",
      body: JSON.stringify({
        messages: history,
      }),
    });
    return response;
  };
  useEffect(() => {
    REQ(
      `https://cxapi.xty.app/log/getBalance?apiKey=${OPENAI_API_KEY_HIGH}`,
      "GET"
    ).then((res) => {
      // console.log("usage", res);
      if (res.content) {
        const { remain_quota, used_quota } = res.content;
        set_usage((used_quota * 100) / (used_quota + remain_quota));
      }
    });
  }, []);
  return (
    <div className="flex flex-col w-full max-w-md p-2 mx-auto stretch">
      <p className=" text-xs text-center">
        {/* 模型：GPT-3.5，知识库于2022年1月停止更新，流量使用情况： */}
        模型：GPT-4，流量使用情况：
      </p>
      <ProgressBar now={usage} />
      {me.map((it, idx) => {
        return (
          <div key={idx}>
            <div className=" text-right">
              <strong>user: </strong>
              <p>{it}</p>
            </div>
            {ai[idx] && (
              <div>
                <strong>AI: </strong>
                <p>{ai[idx]}</p>
              </div>
            )}
          </div>
        );
      })}
      {text && (
        <div>
          <strong>AI: </strong>
          <p>{text}</p>
        </div>
      )}
      {loading && <Spinner animation="grow" size="sm" />}
      <div id="chat_bottom"></div>
      <form
        className="fixed bottom-2 left-0 right-0 text-center"
        onSubmit={handleSubmit}
      >
        <input
          className="w-full max-w-md p-2 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
