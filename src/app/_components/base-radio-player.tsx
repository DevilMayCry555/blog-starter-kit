"use client";

import BaseModal from "./base-modal";
import ReactPlayer from "react-player";
import "./base-radio-player.css";
import { useState } from "react";
import { Button } from "@nextui-org/react";

interface Props {
  url: string;
  action?: string;
  htype?: boolean;
}
export default function BaseRadioPlayer({
  url,
  action = "on",
  htype = false,
}: Props) {
  const [green, set] = useState(htype);
  const handleClick = () => {
    set((state) => !state);
  };
  return (
    <BaseModal action={action} title={action} dismiss={false}>
      {htype && (
        <div className=" text-center">
          <Button onClick={handleClick}> {green ? "关" : "开"}灯</Button>
        </div>
      )}

      {/* 16：9 */}
      <div
        className="base-radio-player-wrap"
        style={{ opacity: green ? 0 : 1 }}
      >
        <ReactPlayer url={url} controls width={"100%"} height={"100%"} />
      </div>
    </BaseModal>
  );
}
