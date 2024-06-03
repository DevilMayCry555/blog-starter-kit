"use client";

import { BASE_URL } from "@/lib/constants";
import { useEffect, useState } from "react";
import { ProgressBar, Spinner } from "react-bootstrap";

const decoder = new TextDecoder("utf-8");

export default function Chat() {
  const [me, setme] = useState([
    "回复我的时候，请尽可能简洁，抓住重点",
  ] as string[]);
  const [text, setText] = useState("好的");
  const [input, setInput] = useState("");
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
        messages: history.slice(-10),
      }),
    });
    return response;
  };
  useEffect(() => {
    fetch(BASE_URL + "/api/stream").then(async (res) => {
      const { content } = await res.json();
      const { remain_quota, used_quota } = content;
      set_usage((used_quota * 100) / (used_quota + remain_quota));
    });
  }, []);

  // location
  useEffect(() => {
    console.log("welcome");
    const ip_api = "https://ip-api.io/json";
    fetch(ip_api)
      .then((res) => res.json())
      .then((res) => fetch(BASE_URL + "/api/open?ipify=" + res.ip))
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        const { longitude, latitude } = res;
        fetch(BASE_URL + "/api/open", {
          method: "POST",
          body: JSON.stringify({
            title: "location",
            content: `${+longitude - 0.001},${+latitude + 0.001};${
              +longitude + 0.001
            },${+latitude - 0.001}`,
            points: 1,
            identity: "chatgpt",
            type: 0,
          }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          cache: "no-store",
        });
      });
  }, []);

  return (
    <div className="flex flex-col w-full max-w-md p-2 mx-auto stretch">
      <p className=" text-xs text-center">
        {/* 模型：GPT-3.5，知识库于2022年1月停止更新，流量使用情况： */}
        模型：GPT-4，单次回复不会超过10s，流量使用情况：
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
