"use client";

import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import BaseList from "./base-list";

const transfer = (obj: { [k: string]: any }) =>
  Object.entries({ ...obj }).map(([label, value]) => ({ value, label }));

const Pages = transfer({
  "/posts": "他她",
  "/map": "天气",
  "/meeting": "贴吧",
  "/draw": "画板",
  "/guess": "竞猜",
  "/demo": "GPT",
  "/three": "3D",
});

const Android = transfer({
  "/deep.apk": "Deep@2024.06",
});

const Control = transfer({
  "/backdoor/user": "user",
  "/backdoor/room": "room",
  "/backdoor/location": "location",
});

export default function HomeList() {
  return (
    <div className=" w-4/5 flex flex-col lg:flex-row">
      {transfer({
        Pages,
        Android,
        Control,
      }).map((it) => {
        return (
          <Card className=" mt-4 lg:flex-1 lg:mx-4" key={it.label}>
            <CardHeader>{it.label}</CardHeader>
            <Divider />
            <CardBody>
              <BaseList list={it.value} />
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
}
