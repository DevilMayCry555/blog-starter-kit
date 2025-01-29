"use client";

import BaseModal from "./base-modal";
import ReactPlayer from "react-player";
import "./base-radio-player.css";
import { Link } from "@nextui-org/react";

interface Props {
  url: string;
  action?: string;
  htype?: boolean;
  rt?: boolean;
}
export default function BaseRadioPlayer({
  url,
  action = "on",
  rt = false,
}: Props) {
  const r = btoa(encodeURIComponent(url));
  return (
    <BaseModal action={action} title={action} dismiss={false}>
      {rt && (
        <div className=" flex justify-center">
          <Link href={`/watch/${Date.now()}#${url}`} target="_blank">
            together
          </Link>
        </div>
      )}
      {/* 16：9 */}
      <div className="base-radio-player-wrap">
        <ReactPlayer url={url} controls width={"100%"} height={"100%"} />
      </div>
      <div className=" flex justify-center py-4">
        <Link href={`/m3u8/${r}`} target="_blank">
          download
        </Link>
      </div>
    </BaseModal>
  );
}
