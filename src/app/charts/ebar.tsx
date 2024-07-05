"use client";

import * as echarts from "echarts";
import { useEffect } from "react";
import { ebar } from "./example";

export default function BaseCharts() {
  const eid = "ex-ebar";
  useEffect(() => {
    const node = document.getElementById(eid);
    console.log("node", node);
    if (node) {
      // Create the echarts instance
      const myChart = echarts.init(node);
      myChart.setOption(ebar());
    }
  }, []);
  return <div id={eid} className=" w-full h-screen"></div>;
}
