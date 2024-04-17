"use client";

import { useState } from "react";
const decoder = new TextDecoder("utf-8");
export default function Chat() {
  const [text, setText] = useState("");
  const [input, setInput] = useState("");

  const handleInputChange = (e: any) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setText("");
    setInput("");

    const response = await fetchData(input);
    const reader = response.body!.getReader();

    reader.read().then(function process({ done, value }): any {
      if (done) {
        console.log("Stream finished");
        return;
      }
      const text = decoder.decode(value);
      console.log("Received data chunk", text);

      setText((value) => {
        return value + text;
      });

      return reader.read().then(process);
    });
  };

  const fetchData = async (input: string) => {
    const response = await fetch("http://localhost:3000/api/stream", {
      method: "POST",
      body: JSON.stringify({ messages: [{ role: "user", content: input }] }),
    });
    return response;
  };

  return (
    <div className="flex flex-col w-full max-w-md p-2 mx-auto stretch">
      <div className="whitespace-pre-wrap">{text ? "AI: " + text : ""}</div>
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
