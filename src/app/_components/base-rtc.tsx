"use client";

import { useState } from "react";
import * as Ably from "ably";
import {
  AblyProvider,
  ChannelProvider,
  useChannel,
  useConnectionStateListener,
} from "ably/react";
import { format } from "date-fns";

// Connect to Ably using the AblyProvider component and your API key
const client = new Ably.Realtime({
  key: "hgdMdA.Byrcwg:UQmkDz-9EuHQkMtrqLflq1wqilzpyvUxj6pUI7CYN_k",
});

export default function BaseRtc({ type = "demo", ...rest }: any) {
  return (
    <AblyProvider client={client}>
      <ChannelProvider channelName="get-started">
        {type === "demo" && <AblyPubSub />}
        {type === "chat" && <AblyPubChat {...rest} />}
      </ChannelProvider>
    </AblyProvider>
  );
}

function AblyPubSub() {
  const [messages, setMessages] = useState<any[]>([]);

  useConnectionStateListener("connected", () => {
    console.log("Connected to Ably!");
  });

  // Create a channel called 'get-started' and subscribe to all messages with the name 'first' using the useChannel hook
  const { channel } = useChannel("get-started", "first", (message) => {
    setMessages((previousMessages) => [...previousMessages, message]);
  });

  return (
    // Publish a message with the name 'first' and the contents 'Here is my first message!' when the 'Publish' button is clicked
    <div>
      <button
        onClick={() => {
          channel.publish("first", "Here is my first message!");
        }}
      >
        Publish
      </button>
      {messages.map((message) => {
        return <p key={message.id}>{message.data}</p>;
      })}
    </div>
  );
}
function AblyPubChat({ username }: any) {
  const [messages, setMessages] = useState<Ably.Message[]>([]);
  const [talk, set_talk] = useState("");

  useConnectionStateListener("connected", () => {
    console.log("Connected success!");
  });

  // Create a channel called 'get-started' and subscribe to all messages with the name 'first' using the useChannel hook
  const { channel } = useChannel("get-started", "first", (message) => {
    setMessages((previousMessages) => [...previousMessages, message]);
  });

  const onSubmit = () => {
    if (!talk) {
      return;
    }
    channel.publish(
      "first",
      JSON.stringify({
        content: talk,
        user_name: username,
        create_time: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
        id: `${Math.random()}`,
      })
    );
    set_talk("");
  };

  return (
    <div>
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
            const { user_name, content, create_time, id } = JSON.parse(
              row.data
            );
            return (
              <div key={id} className="chat-message">
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
