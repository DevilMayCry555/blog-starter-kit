"use client";

import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import BaseList from "./base-list";

const transfer = (obj: { [k: string]: any }) =>
  Object.entries({ ...obj }).map(([label, value]) => ({ label, value }));

const Pages = transfer({
  "/posts": "他她",
  "/map": "天气",
  "/meeting": "贴吧",
  "/draw": "画板",
  "/guess": "竞猜",
  "/demo": "GPT",
  "/three": "3D",
  "/food": "卡路里",
});

const Android = transfer({
  "/deep.apk": "Deep@2024.06",
});

const Control = transfer({
  "/backdoor/user": "user",
  "/backdoor/room": "room",
  // "/backdoor/food": "food",
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
          <Card className=" my-2 lg:flex-1 lg:mx-4" key={it.label}>
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
