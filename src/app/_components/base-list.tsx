"use client";

import { Listbox, ListboxItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";

interface Prop {
  list: any[];
}

export default function HomeList({ list }: Prop) {
  const router = useRouter();
  return (
    <Listbox
      aria-label="Pages"
      onAction={(key) => router.push(`${key}`, { scroll: false })}
    >
      {list.map((it) => {
        return <ListboxItem key={it.value}>{it.label}</ListboxItem>;
      })}
    </Listbox>
  );
}
