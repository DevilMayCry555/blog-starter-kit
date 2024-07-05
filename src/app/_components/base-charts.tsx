"use client";

import * as echarts from "echarts";
import { ECBasicOption } from "echarts/types/src/util/types.js";
import { useEffect } from "react";

export default function BaseCharts({
  id,
  className,
  config,
}: {
  id: string;
  className: string;
  config: ECBasicOption;
}) {
  const eid = id ? id : "eid";
  useEffect(() => {
    const node = document.getElementById(eid);
    console.log("node", node);
    if (node) {
      // Create the echarts instance
      const myChart = echarts.init(node);
      myChart.setOption(config);
    }
  }, []);
  return <div id={eid} className={className}></div>;
}
