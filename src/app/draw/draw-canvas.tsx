"use client";

import { useEffect, useState } from "react";
import { DrawingBoard } from "../../lib/canvas";
import { BASE_URL } from "@/lib/constants";
import { Button } from "@nextui-org/react";

let canvas: HTMLCanvasElement | undefined = undefined;
export default function DrawCanvas({ imgData, userid }: any) {
  const [cas_data, set_cas_data] = useState<string | undefined>("");
  const [loading, setLoading] = useState(false);
  const handleSave = (data: string) => set_cas_data(data);
  const handleClick = (data: any) => {
    setLoading(true);
    fetch(BASE_URL + "/api/draw", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      cache: "no-store",
    }).finally(() => {
      setLoading(false);
    });
  };
  const handleLoad = (imgData: string) => {
    console.log("DrawCanvas", imgData);
    const img = new Image();
    img.src = imgData;
    // img.width = 360;
    img.onload = function () {
      canvas = new DrawingBoard("drawboard", handleSave).canvas;
      const ctx = canvas.getContext("2d");
      ctx?.drawImage(img, 0, 0);
    };
  };
  useEffect(() => {
    if (imgData) {
      handleLoad(imgData);
    } else {
      canvas = new DrawingBoard("drawboard", handleSave).canvas;
    }
    return () => {
      canvas = undefined;
    };
  }, []);
  return (
    <main>
      <canvas
        id="drawboard"
        className="shadow-md m-auto bg-white"
        width={360}
        height={360}
      >
        当前浏览器不支持canvas元素，请升级或更换浏览器！
      </canvas>

      <div className="mt-4 flex justify-around">
        <Button id="clear">清空</Button>
        {userid && (
          <>
            <form
              action="/api/draw"
              method="GET"
              onSubmit={(e) => {
                handleClick({
                  method: "draft",
                  userid,
                  canvas: cas_data,
                });
                e.preventDefault();
              }}
            >
              <Button type="submit" isLoading={loading}>
                保存
              </Button>
            </form>
            <form
              action="/api/draw"
              method="POST"
              encType="text/plain"
              onSubmit={(e) => {
                const current = new Date();
                handleClick({
                  method: "publish",
                  userid,
                  title: `${current.toLocaleDateString()} ${current.toLocaleTimeString()}`,
                  canvas: cas_data,
                });
                e.preventDefault();
              }}
            >
              <Button type="submit" isLoading={loading}>
                发布
              </Button>
            </form>
          </>
        )}
      </div>
    </main>
  );
}
