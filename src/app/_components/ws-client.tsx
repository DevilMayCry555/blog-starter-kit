"use client";

import { useEffect, useState } from "react";
import { socket } from "../../socket";

export function WSClient({ userid }: any) {
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");
  // 广播
  const [mount, setMount] = useState(0);

  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }

    function onConnect() {
      setIsConnected(true);
      setTransport(socket.io.engine.transport.name);

      socket.io.engine.on("upgrade", (transport: any) => {
        setTransport(transport.name);
      });
      // 绑定事件
      socket.on("broadcast", broadcast);
      // 入场
      socket.emit("hello", { userid });
    }

    function onDisconnect() {
      setIsConnected(false);
      setTransport("N/A");
    }
    function broadcast(value: any) {
      console.log("server send: ", value);
      const { counter } = value;
      setMount(counter ?? 0);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("broadcast", broadcast);
    };
  }, []);

  return (
    <div>
      <span className="hidden">
        {String(isConnected)}-{transport}
      </span>
      在线人数：{mount}
    </div>
  );
}
