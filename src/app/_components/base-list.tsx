"use client";

import { Listbox, ListboxItem, Spinner } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Prop {
  list: any[];
}

export default function BaseList({ list }: Prop) {
  const router = useRouter();
  const [select, set] = useState("");
  return (
    <Listbox
      aria-label="Pages"
      onAction={(key) => {
        set(`${key}`);
        router.push(`${key}`, { scroll: true });
      }}
    >
      {list.map((it) => {
        return (
          <ListboxItem
            key={it.label}
            textValue={it.label}
            description={it.desc}
            startContent={select === it.label ? <Spinner size="sm" /> : null}
          >
            {it.value}
          </ListboxItem>
        );
      })}
    </Listbox>
  );
}
