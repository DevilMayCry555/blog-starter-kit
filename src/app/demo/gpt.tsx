"use client";

import { BASE_URL, isDEV } from "@/lib/constants";
import { Progress, Spinner } from "@nextui-org/react";
import { useEffect, useState } from "react";

const decoder = new TextDecoder("utf-8");
interface Prop {
  usage: number;
}
export default function Chat({ usage }: Prop) {
  const [me, set_me] = useState(["你好"] as string[]);
  const [text, set_text] = useState("你好");
  const [input, set_input] = useState("");
  const [ai, set_ai] = useState([] as string[]);
  const [loading, set_loading] = useState(false);
  const handleInputChange = (e: any) => {
    set_input(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (loading) {
      return;
    }
    set_text("");
    set_input("");
    set_loading(true);
    set_me((state) => state.concat([input]));
    set_ai((state) => state.concat([text]));
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

      set_text((value) => {
        return value + slice;
      });

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
    if (isDEV) {
      return;
    }
    fetch(BASE_URL + "/api/open", {
      method: "POST",
      body: "chatgpt",
      cache: "no-store",
    });
  }, []);
  return (
    <div className=" flex-1 pt-20 max-w-md mx-auto relative">
      <div className=" shadow-inner shadow-slate-700 px-2">
        {text && (
          <div>
            <strong>AI: </strong>
            <p>{text}</p>
          </div>
        )}
        {loading && <Spinner />}
        {me
          .map((it, idx) => {
            return (
              <div key={idx}>
                {ai[idx] && (
                  <div>
                    <strong>AI: </strong>
                    <p>{ai[idx]}</p>
                  </div>
                )}
                <div className=" text-right">
                  <strong>user: </strong>
                  <p>{it}</p>
                </div>
              </div>
            );
          })
          .reverse()}
      </div>
      <form
        className=" absolute top-2 left-0 right-0 text-center"
        onSubmit={handleSubmit}
      >
        <Progress value={usage} size="sm" />
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
