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
      onAction={(key) => router.push(`${key}`, { scroll: true })}
    >
      {list.map((it) => {
        return <ListboxItem key={it.label}>{it.value}</ListboxItem>;
      })}
    </Listbox>
  );
}
