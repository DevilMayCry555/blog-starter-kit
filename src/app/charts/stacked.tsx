"use client";

import * as echarts from "echarts";
import { useEffect } from "react";
import { stacked } from "./example";

export default function BaseCharts() {
  const eid = "ex-stacked";
  useEffect(() => {
    const node = document.getElementById(eid);
    console.log("node", node);
    if (node) {
      // Create the echarts instance
      const myChart = echarts.init(node);
      myChart.setOption(stacked());
    }
  }, []);
  return <div id={eid} className=" w-full h-screen"></div>;
}
