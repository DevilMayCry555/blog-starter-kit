"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@nextui-org/react";
import BaseModal from "../_components/base-modal";

const getuuid = () => `tyd-${Math.random()}`;
let once = true;
interface Part {
  id: string;
  type?: string;
  children?: Part[];
  close?: boolean;
  [k: string]: any;
}

export default function Editor() {
  const [current, select] = useState("");
  const [inputs, set] = useState<Part[]>([{ id: getuuid() }]);
  const [values, update] = useState<{ [k: string]: string }>({});
  //
  const handle = (
    { id = "", type = "", children = [] }: Part,
    toImage = false
  ): string => {
    const parts = children.map((it) => handle(it, toImage));
    if (type === "square") {
      return `<msup>
            <mrow>
                <mo>(</mo>
                ${parts.join("")}
                <mo>)</mo>
            </mrow>
            <mn>2</mn>
        </msup>`;
    }
    if (type === "sqrt") {
      return `<msqrt>
            <mrow>${parts.join("")}</mrow>
        </msqrt>`;
    }

    const [p1, p2, p3] = parts;
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
            <mrow>${p1}</mrow>
            <mrow>${p2}</mrow>
        </mfrac>`;
    }
    if (type === "sum") {
      return `<munderover>
          <mo>∑</mo>
          <mrow>
            ${p1}
          </mrow>
          <mi>${p2}</mi>
        </munderover>
        ${p3}
        `;
    }
    if (toImage) {
      return `<mi>${values[id] ?? ""}</mi>`;
    }

    return `<mi class="math-random" >
        <input class="math-random-input" id="${id}_input" type="text" placeholder="..." value="${
      values[id] ?? ""
    }" />
        <span class="math-random-close" id="${id}_close" ></span>
    </mi>`;
  };
  //
  const transfer = useMemo(() => {
    const r = inputs
      .map((it) => {
        return handle(it, true);
      })
      .join("");
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: `<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">${r}</math>`,
        }}
      ></div>
    );
  }, [inputs, values]);

  const onAction = (type = "") => {
    if (type === "clear") {
      set([{ id: getuuid() }]);
      return;
    }
    set((state) => onPartChange(state, current, type));
    select("");
  };
  //
  useEffect(() => {
    window.addEventListener("message", function (e) {
      const [id, method, value] = `${e.data ?? ""}`.split("_");
      if (method === "load") {
        set((state) => onPartChange(state, current, ""));
      }
      if (method === "input") {
        select(id);
      }
      if (method === "close") {
        set((state) => {
          const res = onPartClose(state, id);
          return res.length > 0 ? res : [{ id: getuuid() }];
        });
      }
      if (method === "change") {
        update((state) => ({ ...state, [id]: value }));
      }
    });
  }, []);

  // post message to update mathml
  useEffect(() => {
    // const container = document.getElementById("math-editor-container");
    // if (container) {
    //   console.log(container);
    //   container.addEventListener("click", (e) => {
    //     const { id } = e.target as any;
    //     select(id);
    //   });
    // }
    if (once) {
      once = false;
      return;
    }
    const f = document.getElementById(
      "math-editor-iframe"
    ) as HTMLIFrameElement;
    const str = inputs
      .map((it) => {
        return handle(it);
      })
      .join("");
    f.contentWindow?.postMessage(str);
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
        <Button className=" m-2 text-large" onClick={() => onAction("sum")}>
          {" "}
          ∑{" "}
        </Button>
        <Button className=" m-2 text-large" onClick={() => onAction("clear")}>
          clear
        </Button>
        <div className=" m-2 text-large">
          <BaseModal action="show" title="">
            <div style={{ minHeight: "56vw" }}>{transfer}</div>
          </BaseModal>
        </div>
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
const getChildern = (type = "") => {
  if (["sum"].includes(type)) {
    return [{ id: getuuid() }, { id: getuuid() }, { id: getuuid() }];
  }
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
