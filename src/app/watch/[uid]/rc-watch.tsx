"use client";

import { useEffect, useState } from "react";
import * as Ably from "ably";
import {
  AblyProvider,
  ChannelProvider,
  useChannel,
  useConnectionStateListener,
} from "ably/react";
import ReactPlayer from "react-player";
import "./rc-watch.css";

// Connect to Ably using the AblyProvider component and your API key
const client = new Ably.Realtime({
  key: "hgdMdA.Byrcwg:UQmkDz-9EuHQkMtrqLflq1wqilzpyvUxj6pUI7CYN_k",
});

const name = "tyd-rt-watch";

export default function RtWatch(props: any) {
  return (
    <AblyProvider client={client}>
      <ChannelProvider channelName={name}>
        <AblyPubChat {...props} />
      </ChannelProvider>
    </AblyProvider>
  );
}

function AblyPubChat({ hardcore }: any) {
  const [messages, setMessages] = useState<Ably.Message[]>([]);
  const [talk, set_talk] = useState("");
  const [url, set_url] = useState("");

  // Create a channel called 'get-started' and subscribe to all messages with the name 'first' using the useChannel hook
  const { channel } = useChannel(name, hardcore, (message) => {
    setMessages((previousMessages) => [...previousMessages, message]);
  });

  useConnectionStateListener("connected", () => {
    console.log("Connected success!");
  });

  const onSubmit = () => {
    channel.publish(
      hardcore,
      JSON.stringify({
        content: talk,
      })
    );
    set_talk("");
  };
  useEffect(() => {
    set_url(location.hash.replace(/^#/, ""));
  });
  const onPlay = (...arg: any[]) => {
    console.log(...arg);
  };
  const onPause = (...arg: any[]) => {
    console.log(...arg);
  };
  if (!url) {
    return "lalala";
  }
  return (
    <div>
      <div className="base-radio-player-wrap">
        <ReactPlayer
          url={url}
          controls
          width={"100%"}
          height={"100%"}
          onPlay={onPlay}
          onProgress={onPlay}
          onPause={onPause}
        />
      </div>
    </div>
  );
}
