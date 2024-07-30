"use client";

import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";

const getuuid = () => `tyd-${Math.random()}`;
interface Part {
  id: string;
  type?: string;
  children?: Part[];
  close?: boolean;
  [k: string]: any;
}

const getChildern = (type = "") => {
  if (["equal", "add", "subtract", "multiply", "divide"].includes(type)) {
    return [{ id: getuuid() }, { id: getuuid() }];
  }
  if (["square", "sqrt"].includes(type)) {
    return [{ id: getuuid() }];
  }
  return [];
};
const onPartChange = (state: Part[], current: string, type: string): Part[] => {
  return state.map((it) => {
    const { id, children = [] } = it;
    if (current === id) {
      return {
        ...it,
        type,
        children: getChildern(type),
      };
    }
    if (children.length > 0) {
      return {
        ...it,
        children: onPartChange(children, current, type),
      };
    }
    return it;
  });
};
const onPartClose = (state: Part[], current: string): Part[] => {
  return state
    .map((it) => {
      const { id, children = [] } = it;
      //
      if (id === current) {
        return {
          ...it,
          close: true,
        };
      }
      //
      if (children.some((it) => it.id === current)) {
        return {
          id,
        };
      }
      //
      if (children.length > 0) {
        return {
          ...it,
          children: onPartClose(children, current),
        };
      }
      return it;
    })
    .filter((it) => !it.close);
};

export default function Editor() {
  const [current, select] = useState("");
  const [inputs, set] = useState<Part[]>([{ id: getuuid() }]);

  // const transfer = useMemo(() => {
  //   const r = inputs
  //     .map((it) => {
  //       return handle(it);
  //     })
  //     .join("");
  //   return (
  //     <div
  //       dangerouslySetInnerHTML={{
  //         __html: `<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">${r}</math>`,
  //       }}
  //     ></div>
  //   );
  // }, [inputs]);

  const onAction = (type = "") => {
    if (type === "clear") {
      set([{ id: getuuid() }]);
      select(type);
      return;
    }
    set((state) => onPartChange(state, current, type));
  };

  useEffect(() => {
    // const container = document.getElementById("math-editor-container");
    // if (container) {
    //   console.log(container);
    //   container.addEventListener("click", (e) => {
    //     const { id } = e.target as any;
    //     select(id);
    //   });
    // }
    const f = document.getElementById(
      "math-editor-iframe"
    ) as HTMLIFrameElement;
    if (!current) {
      f.addEventListener("load", function (e) {
        f.contentWindow?.postMessage(JSON.stringify(inputs));
      });
      window.addEventListener("message", function (e) {
        const [id, method] = `${e.data ?? ""}`.split("_");
        if (method === "input") {
          select(id);
        }
        if (method === "close") {
          set((state) => {
            const res = onPartClose(state, id);
            return res.length > 0 ? res : [{ id: getuuid() }];
          });
          select("close");
        }
      });
      return;
    }
    f.contentWindow?.postMessage(JSON.stringify(inputs));
    select("");
  }, [inputs]);
  return (
    <>
      <div className=" flex flex-wrap justify-center mb-12">
        <Button className=" m-2 text-large" onClick={() => onAction("add")}>
          {" "}
          +{" "}
        </Button>
        <Button
          className=" m-2 text-large"
          onClick={() => onAction("subtract")}
        >
          {" "}
          -{" "}
        </Button>
        <Button
          className=" m-2 text-large"
          onClick={() => onAction("multiply")}
        >
          {" "}
          *{" "}
        </Button>
        <Button className=" m-2 text-large" onClick={() => onAction("divide")}>
          {" "}
          /{" "}
        </Button>
        <Button className=" m-2 text-large" onClick={() => onAction("equal")}>
          {" "}
          ={" "}
        </Button>
        <Button className=" m-2 text-large" onClick={() => onAction("square")}>
          {" "}
          x²{" "}
        </Button>
        <Button className=" m-2 text-large" onClick={() => onAction("sqrt")}>
          {" "}
          &#x221A;{" "}
        </Button>
        <Button className=" m-2 text-large" onClick={() => onAction("clear")}>
          clear
        </Button>
      </div>
      {/* <div id="math-editor-container">{transfer}</div> */}
      <iframe
        id="math-editor-iframe"
        src="/mathml.html"
        width="100%"
        height={200}
        className=" shadow-inner bg-white"
      ></iframe>
    </>
  );
}
const handle = ({ id = "", type = "", children = [] }: Part): string => {
  const parts = children.map((it) => handle(it));
  if (type === "square") {
    return `<msup>
      <mrow>${parts.join("")}</mrow>
      <mn>2</mn>
      </msup>`;
  }
  if (type === "sqrt") {
    return `<msqrt>
        <mrow>${parts.join("")}</mrow>
        </msqrt>`;
  }

  const [p1, p2] = parts;
  if (type === "equal") {
    return `${p1}<mo>=</mo>${p2}`;
  }
  if (type === "add") {
    return `${p1}<mo>+</mo>${p2}`;
  }
  if (type === "subtract") {
    return `${p1}<mo>-</mo>${p2}`;
  }
  if (type === "multiply") {
    return `${p1}<mo>&#x2219;</mo>${p2}`;
  }
  if (type === "divide") {
    return `<mfrac>
      <mrow>
      ${p1}
      </mrow>
      <mrow>
      ${p2}
      </mrow>
    </mfrac>`;
  }

  return `<mi><input class="math-random" id="${id}" type="text" placeholder="..." ></mi>`;
};
