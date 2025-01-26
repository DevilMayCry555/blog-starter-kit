"use client";

import { useEffect, useRef, useState } from "react";
import * as Ably from "ably";
import {
  AblyProvider,
  ChannelProvider,
  useChannel,
  useConnectionStateListener,
} from "ably/react";
import ReactPlayer from "react-player";
import "./rc-watch.css";
import { Button } from "@nextui-org/react";

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
let stop = false;
function AblyPubChat({ hardcore }: any) {
  const [messages, setMessages] = useState<Ably.Message[]>([]);
  const [ss, set_ss] = useState(0);
  const [url, set_url] = useState("");
  const playerRef = useRef(null as any);

  // Create a channel called 'get-started' and subscribe to all messages with the name 'first' using the useChannel hook
  const { channel } = useChannel(name, hardcore, (message) => {
    // setMessages((previousMessages) => [...previousMessages, message]);
    const { time } = JSON.parse(message.data);
    playerRef.current?.seekTo(time);
    stop = true;
  });

  useConnectionStateListener("connected", () => {
    console.log("Connected success!");
  });

  useEffect(() => {
    set_url(location.hash.replace(/^#/, ""));
  });
  const onSeek = (time: number) => {
    if (stop) {
      stop = false;
      return;
    }
    console.log("lalala", ss, time);
    set_ss(time);
    channel.publish(
      hardcore,
      JSON.stringify({
        time,
      })
    );
  };
  if (!url) {
    return "lalala";
  }
  return (
    <div>
      <div className="base-radio-player-wrap">
        <ReactPlayer
          ref={playerRef}
          url={url}
          controls
          width={"100%"}
          height={"100%"}
          onSeek={onSeek}
        />
      </div>
    </div>
  );
}
