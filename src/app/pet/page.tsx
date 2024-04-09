"use client";

import { useEffect } from "react";
import { DrawingBoard } from "../../lib/canvas";

export default function Pet() {
  useEffect(() => {
    const ctx = new DrawingBoard("pet").context;
    // ctx.moveTo(50, 50);
    // ctx.lineTo(50, 100);
    // ctx.stroke();
  }, []);
  return (
    <div className="py-4">
      <canvas id="pet" className="shadow-md m-auto" width={300} height={500}>
        当前浏览器不支持canvas元素，请升级或更换浏览器！
      </canvas>
      <button className="m-auto" id="clear">
        clear
      </button>
    </div>
  );
}
