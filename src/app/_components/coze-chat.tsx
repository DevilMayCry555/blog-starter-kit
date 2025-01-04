"use client";

import Script from "next/script";

export default function Coze() {
  const load = () => {
    const { CozeWebSDK } = window as any;
    new CozeWebSDK.WebChatClient({
      config: {
        bot_id: "7455974749769482255",
      },
      componentProps: {
        title: "Coze",
      },
    });
  };
  return (
    <Script
      src="https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/1.1.0-beta.0/libs/cn/index.js"
      onLoad={load}
    ></Script>
  );
}
