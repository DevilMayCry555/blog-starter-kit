"use client";

import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function HomeList() {
  const router = useRouter();
  return (
    <div className=" w-4/5">
      <Card className=" mt-4">
        <CardHeader>Pages</CardHeader>
        <Divider />
        <CardBody>
          <Listbox
            aria-label="Pages"
            onAction={(key) => router.push(`${key}`, { scroll: false })}
          >
            <ListboxItem key="/posts">他她</ListboxItem>
            <ListboxItem key="/map">天气</ListboxItem>
            <ListboxItem key="/meeting/public">广场</ListboxItem>
            <ListboxItem key="/draw">画板</ListboxItem>
            <ListboxItem key="/guess">竞猜</ListboxItem>
            <ListboxItem key="/demo">GPT</ListboxItem>
          </Listbox>
        </CardBody>
      </Card>
      <Card className=" mt-4">
        <CardHeader>Android</CardHeader>
        <Divider />
        <CardBody>
          <Listbox
            aria-label="AndroidApp"
            onAction={(key) => router.push(`${key}`, { scroll: false })}
          >
            <ListboxItem key="/deep.apk">Deep@2024.06</ListboxItem>
          </Listbox>
        </CardBody>
      </Card>
      <Card className=" mt-4">
        <CardHeader>Three</CardHeader>
        <Divider />
        <CardBody>
          <Listbox
            aria-label="ThreeJs"
            onAction={(key) => router.push(`${key}`, { scroll: false })}
          >
            <ListboxItem key="/three/solar">solar</ListboxItem>
            <ListboxItem key="/three/tank">tank</ListboxItem>
            <ListboxItem key="/three/g">g</ListboxItem>
          </Listbox>
        </CardBody>
      </Card>
    </div>
  );
}
