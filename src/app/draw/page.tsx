"use client";

import { useEffect } from "react";
import { DrawingBoard } from "../../lib/canvas";
import { Button } from "react-bootstrap";

export default function Draw() {
  useEffect(() => {
    new DrawingBoard("drawboard");
  }, []);
  return (
    <div className="py-4 text-center">
      <Button id="clear" variant="outline-secondary">
        clear
      </Button>
      <canvas
        id="drawboard"
        className="shadow-md m-auto mt-2"
        width={463.5}
        height={750}
      >
        当前浏览器不支持canvas元素，请升级或更换浏览器！
      </canvas>
    </div>
  );
}
