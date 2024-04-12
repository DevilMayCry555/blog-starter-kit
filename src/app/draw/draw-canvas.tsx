"use client";

import { useEffect } from "react";
import { DrawingBoard } from "../../lib/canvas";
import { Button } from "react-bootstrap";
let once = false;
let cas: HTMLCanvasElement | null = null;
export default function DrawCanvas() {
  const handleSend = () => {
    if (cas) {
      console.log(cas.toDataURL("image/png", 0.5));
    }
  };
  useEffect(() => {
    if (!once) {
      once = !once;
      console.log("DrawCanvas");
      cas = new DrawingBoard("drawboard").canvas;
    }
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
          清空
        </Button>
      </div>
      <div className="mt-4 text-center">
        <Button variant="outline-secondary" onClick={handleSend}>
          发布
        </Button>
      </div>
    </div>
  );
}
