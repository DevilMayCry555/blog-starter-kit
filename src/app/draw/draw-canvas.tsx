"use client";

import { useEffect } from "react";
import { DrawingBoard } from "../../lib/canvas";
import { Button } from "react-bootstrap";

export default function DrawCanvas() {
  useEffect(() => {
    new DrawingBoard("drawboard");
  }, []);
  return (
    <div>
      <canvas
        id="drawboard"
        className="shadow-md m-auto"
        width={309}
        height={500}
      >
        当前浏览器不支持canvas元素，请升级或更换浏览器！
      </canvas>
      <div className="mt-4 text-center">
        <Button id="clear" variant="outline-secondary">
          clear
        </Button>
      </div>
    </div>
  );
}
