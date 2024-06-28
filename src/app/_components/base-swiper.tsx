"use client";

import { useState } from "react";
import BaseModal from "./base-modal";
import { Image, Button } from "@nextui-org/react";

interface Props {
  urls: string[];
}
export default function BaseSwiper({ urls }: Props) {
  const [current, set] = useState(0);
  return (
    <BaseModal action={`${urls.length}`} title="">
      <div className=" h-52 overflow-auto flex justify-center">
        <Image width={300} src={urls[current]} />
      </div>
      <Button onClick={() => set((state) => (state + 1) % urls.length)}>
        next
      </Button>
    </BaseModal>
  );
}
