"use client";

import { Listbox, ListboxItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";

interface Prop {
  list: any[];
}

export default function BaseList({ list }: Prop) {
  const router = useRouter();
  return (
    <Listbox
      aria-label="Pages"
      onAction={(key) => router.push(`${key}`, { scroll: true })}
    >
      {list.map((it) => {
        return (
          <ListboxItem
            key={it.label}
            textValue={it.label}
            description={it.desc}
          >
            {it.value}
          </ListboxItem>
        );
      })}
    </Listbox>
  );
}
