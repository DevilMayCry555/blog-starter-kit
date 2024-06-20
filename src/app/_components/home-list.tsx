"use client";

import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import BaseList from "./base-list";

const transfer = (obj: { [k: string]: any }) =>
  Object.entries({ ...obj }).map(([value, label]) => ({ value, label }));

const Pages = transfer({
  "/posts": "他她",
  "/map": "天气",
  "/meeting/public?k=public": "广场",
  "/draw": "画板",
  "/guess": "竞猜",
  "/demo": "GPT",
});

const Android = transfer({
  "/deep.apk": "Deep@2024.06",
});

const Three = transfer({
  "/three/solar": "solar",
  "/three/tank": "tank",
  "/three/g": "g",
});

const Control = transfer({
  "/backdoor/user": "user",
  "/backdoor/room": "room",
  "/backdoor/location": "location",
});

export default function HomeList() {
  return (
    <div className=" w-4/5 flex flex-col">
      {transfer({
        Pages,
        Android,
        Three,
        Control,
      }).map((it) => {
        return (
          <Card className=" mt-4" key={it.value}>
            <CardHeader>{it.value}</CardHeader>
            <Divider />
            <CardBody>
              <BaseList list={it.label} />
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
}
