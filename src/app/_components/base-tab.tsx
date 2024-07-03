"use client";

import { Tab, Tabs } from "@nextui-org/react";

interface Prop {
  group: any[];
  vertical?: boolean;
}

export default function BaseTab({ group, vertical = false }: Prop) {
  return (
    <Tabs aria-label="Options" defaultSelectedKey={"0"} isVertical={vertical}>
      {group.map((it, idx) => (
        <Tab key={idx} title={it.title}>
          {it.content}
        </Tab>
      ))}
    </Tabs>
  );
}
