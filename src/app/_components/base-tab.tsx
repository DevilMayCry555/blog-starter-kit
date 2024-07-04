"use client";

import { Tab, Tabs } from "@nextui-org/react";

interface Prop {
  group: any[];
  vertical?: boolean;
  defaultKey?: string;
}

export default function BaseTab({
  group,
  vertical = false,
  defaultKey = "0",
}: Prop) {
  return (
    <Tabs
      aria-label="Options"
      defaultSelectedKey={defaultKey}
      isVertical={vertical}
    >
      {group.map((it, idx) => (
        <Tab key={idx} title={it.title} className=" flex-1">
          {it.content}
        </Tab>
      ))}
    </Tabs>
  );
}
