"use client";

import { BASE_URL } from "@/lib/constants";
import { useState } from "react";
const decoder = new TextDecoder("utf-8");
export default function Chat() {
  const [text, setText] = useState("");
  const [input, setInput] = useState("");
  const [me, setme] = useState([] as string[]);
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

  const fetchData = async (input: string) => {
    const response = await fetch(BASE_URL + "/api/stream", {
      method: "POST",
      body: JSON.stringify({ messages: [{ role: "user", content: input }] }),
    });
    return response;
  };

  return (
    <div className="flex flex-col w-full max-w-md p-2 mx-auto stretch">
      {me.map((it, idx) => {
        return (
          <div key={idx}>
            <p>
              <strong>user: </strong>
              <span>{it}</span>
            </p>
            {ai[idx + 1] && (
              <p>
                <strong>AI: </strong>
                <span>{ai[idx + 1]}</span>
              </p>
            )}
          </div>
        );
      })}
      {text && (
        <p>
          <strong>AI: </strong>
          <span>{text}</span>
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
