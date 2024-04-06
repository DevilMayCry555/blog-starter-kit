"use client";

import { useEffect, useState } from "react";
import { socket } from "../../socket";

export function Reload() {
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");
  const handleClick = () => {
    socket.emit("hello", "world");
  };

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
      socket.on("qwer", qwer);
    }

    function onDisconnect() {
      setIsConnected(false);
      setTransport("N/A");
    }
    function qwer() {
      console.log("server send hello");
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("qwer", qwer);
    };
  }, []);

  return (
    <div>
      {String(isConnected)}-{transport}
      <button onClick={handleClick}>qwer</button>
    </div>
  );
}
