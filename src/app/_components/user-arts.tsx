"use client";

import { Listbox, ListboxItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function UserArts({ listData = [] }: any) {
  const router = useRouter();
  return (
    <Listbox
      aria-label="Pages"
      onAction={(key) => router.push(`${key}`, { scroll: false })}
    >
      {[].concat(listData).map((it) => {
        const { uid, title } = it;
        return (
          <ListboxItem showDivider key={`/guess/${uid}`}>
            {title}
          </ListboxItem>
        );
      })}
    </Listbox>
  );
}
