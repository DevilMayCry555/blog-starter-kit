"use client";

import Gravity from "./gravity";
import Solar from "./solar";
import Tank from "./tank";
import { Tab, Tabs } from "@nextui-org/react";
export default function Main() {
  return (
    <Tabs aria-label="Options">
      <Tab key="Solar" title="Solar">
        <Solar />
      </Tab>
      <Tab key="Tank" title="Tank">
        <Tank />
      </Tab>
      <Tab key="Gravity" title="Gravity">
        <Gravity />
      </Tab>
    </Tabs>
  );
}
