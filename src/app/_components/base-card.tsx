"use client";

import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

export default function BaseCard({ children, title }: any) {
  return (
    <Card className=" my-2 lg:flex-1 lg:mx-4">
      <CardHeader>{title}</CardHeader>
      <Divider />
      <CardBody>{children}</CardBody>
    </Card>
  );
}
