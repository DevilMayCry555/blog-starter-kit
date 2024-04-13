"use client";

import { useEffect, useState } from "react";
import { DrawingBoard } from "../../lib/canvas";
import { Button } from "react-bootstrap";
import "./style.css";

let once = false;
let canvas: HTMLCanvasElement | undefined = undefined;
export default function DrawCanvas({ imgData, userid }: any) {
  const [cas_data, set_cas_data] = useState<string | undefined>("");
  const [can_pb, set_can_pb] = useState(false);
  const handleSave = (data: string) => {
    // const data = canvas?.toDataURL("image/png", 0.5);
    set_cas_data(data);
    set_can_pb(true);
  };
  useEffect(() => {
    if (!once) {
      once = !once;
      console.log("DrawCanvas", imgData);
      if (imgData) {
        const img = new Image();
        img.src = imgData;
        img.onload = function () {
          canvas = new DrawingBoard("drawboard", handleSave).canvas;
          const ctx = canvas.getContext("2d");
          ctx?.drawImage(img, 0, 0);
        };
      } else {
        canvas = new DrawingBoard("drawboard", handleSave).canvas;
      }
    }
  }, []);
  return (
    <main>
      {/* <Container> */}
      <form action="/api/draw" method="GET">
        <input type="text" name="method" defaultValue={"publish"} hidden />
        <input type="text" name="userid" defaultValue={userid} hidden />
        <input
          type="text"
          name="canvas"
          value={cas_data}
          onChange={(e) => set_cas_data(e.target.value)}
          required
          hidden
        />
        <div className="input-box">
          <input type="text" name="title" required placeholder="请输入标题" />
          <Button type="submit" variant="outline-secondary" disabled={!can_pb}>
            发布
          </Button>
        </div>
      </form>
      <canvas
        id="drawboard"
        className="shadow-md m-auto"
        width={309}
        height={500}
      >
        当前浏览器不支持canvas元素，请升级或更换浏览器！
      </canvas>
      <div className="mt-4 flex justify-around">
        <Button id="clear" variant="outline-secondary">
          清空
        </Button>
        <form action="/api/draw" method="GET">
          <input type="text" name="method" defaultValue={"draft"} hidden />
          <input type="text" name="userid" defaultValue={userid} hidden />
          <input
            type="text"
            name="canvas"
            value={cas_data}
            onChange={(e) => set_cas_data(e.target.value)}
            required
            hidden
          />
          <Button type="submit" variant="outline-secondary" disabled={!can_pb}>
            保存
          </Button>
        </form>
      </div>
      {/* </Container> */}
    </main>
  );
}
