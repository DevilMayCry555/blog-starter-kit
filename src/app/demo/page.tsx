"use client";

import { BASE_URL } from "@/lib/constants";
import { useState } from "react";

const decoder = new TextDecoder("utf-8");
export default function Chat() {
  const [text, setText] = useState("nice to meet you");
  const [input, setInput] = useState("");
  const [me, setme] = useState(["hello"] as string[]);
  const [ai, setai] = useState([] as string[]);
  const handleInputChange = (e: any) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setText("");
    setInput("");
    setme((state) => state.concat([input]));
    setai((state) => state.concat([text]));
    const response = await fetchData(input);
    const reader = response.body!.getReader();
    reader.read().then(function process({ done, value }): any {
      if (done) {
        console.log("Stream finished");
        return;
      }
      const slice = decoder.decode(value);
      console.log("Received data chunk", slice);

      setText((value) => {
        return value + slice;
      });

      return reader.read().then(process);
    });
  };

  const fetchData = async (inputs: string) => {
    console.log(me, ai);
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

  return (
    <div className="flex flex-col w-full max-w-md p-2 mx-auto stretch">
      <div className=" max-h-[50vh] overflow-auto">
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
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
      <p className=" text-xs text-center">
        模型：GPT-3.5，最后一次更新于2022年1月
      </p>
    </div>
  );
}
