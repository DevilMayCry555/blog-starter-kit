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
    <BaseModal action={urls.length} title="" type="image">
      <div className=" h-80 overflow-auto flex justify-center">
        <Image width={300} src={urls[current]} />
      </div>
      <div className=" flex">
        <Button
          className=" flex-1"
          onClick={() => set((state) => (state ? state : urls.length) - 1)}
        >
          prev
        </Button>
        <Button
          className=" flex-1"
          onClick={() => set((state) => (state + 1) % urls.length)}
        >
          next
        </Button>
      </div>
    </BaseModal>
  );
}
