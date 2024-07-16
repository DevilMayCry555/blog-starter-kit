"use client";

import BaseModal from "./base-modal";
import ReactPlayer from "react-player";
import "./base-radio-player.css";

interface Props {
  url: string;
  action?: string;
  htype?: boolean;
}
export default function BaseRadioPlayer({ url, action = "on" }: Props) {
  return (
    <BaseModal action={action} title={action} dismiss={false}>
      {/* 16：9 */}
      <div className="base-radio-player-wrap">
        <ReactPlayer url={url} controls width={"100%"} height={"100%"} />
      </div>
    </BaseModal>
  );
}
