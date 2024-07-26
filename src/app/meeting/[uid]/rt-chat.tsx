"use client";

import { useEffect, useState } from "react";
import * as Ably from "ably";
import {
  AblyProvider,
  ChannelProvider,
  useChannel,
  useConnectionStateListener,
} from "ably/react";
import { format } from "date-fns";
import "./style.css";
import { BASE_URL, isDEV } from "@/lib/constants";

// Connect to Ably using the AblyProvider component and your API key
const client = new Ably.Realtime({
  key: "hgdMdA.Byrcwg:UQmkDz-9EuHQkMtrqLflq1wqilzpyvUxj6pUI7CYN_k",
});

const name = "tyd-rt-chat";

export default function RtChat(props: any) {
  return (
    <AblyProvider client={client}>
      <ChannelProvider channelName={name}>
        <AblyPubChat {...props} />
      </ChannelProvider>
    </AblyProvider>
  );
}

function AblyPubChat({ username, hardcore }: any) {
  const [messages, setMessages] = useState<Ably.Message[]>([]);
  const [talk, set_talk] = useState("");

  // Create a channel called 'get-started' and subscribe to all messages with the name 'first' using the useChannel hook
  const { channel } = useChannel(name, hardcore, (message) => {
    setMessages((previousMessages) => [...previousMessages, message]);
  });

  useConnectionStateListener("connected", () => {
    console.log("Connected success!");
    if (isDEV) {
      return;
    }
    fetch(BASE_URL + "/api/open", {
      method: "POST",
      body: "rtchat",
      cache: "no-store",
    });
  });

  const onSubmit = () => {
    channel.publish(
      hardcore,
      JSON.stringify({
        content: talk,
        user_name: username,
        create_time: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
      })
    );
    set_talk("");
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((info) => {
      const { latitude, longitude } = info.coords;
      alert(`${longitude},${latitude}`);
    });
  }, []);

  return (
    <div className="chat-room">
      <form
        action="/api/meeting"
        method="GET"
        encType="text/plain"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div className="input-box">
          <input
            type="text"
            value={talk}
            onChange={(e) => set_talk(e.target.value)}
            required
          />
          <button type="submit">发送</button>
        </div>
      </form>
      <div className="chat-box">
        {messages
          .map((row, idx) => {
            const { user_name, content, create_time } = JSON.parse(row.data);
            return (
              <div key={idx} className="chat-message">
                <div className="user-name">{user_name}:</div>
                <div className="message-content">{content}</div>
                <div className="text-xs text-slate-400 flex justify-between">
                  <span>{create_time}</span>
                  <span>#{idx} </span>
                </div>
              </div>
            );
          })
          .reverse()}
      </div>
    </div>
  );
}
