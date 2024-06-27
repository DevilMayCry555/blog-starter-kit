"use client";

import BaseModal from "./base-modal";
import ReactPlayer from "react-player";

interface Props {
  url: string;
}
export default function BaseRadioPlayer({ url }: Props) {
  return (
    <BaseModal action="on" title="radio">
      <ReactPlayer url={url} controls width={320} height={50} />
    </BaseModal>
  );
}
