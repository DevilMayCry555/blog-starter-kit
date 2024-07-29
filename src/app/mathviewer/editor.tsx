"use client";

import { useEffect, useMemo, useState } from "react";
import "./style.css";

const getuuid = () => `tyd-${Math.random()}`;
let once = true;
interface Part {
  id: string;
  type?: string;
  children?: Part[];
  [k: string]: any;
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

const onPartChange = (state: Part[], current: string, type: string): Part[] => {
  return state.map((it) => {
    const { id, children = [] } = it;
    if (current === id) {
      const p1 = { id: getuuid() };
      const p2 = { id: getuuid() };
      return {
        ...it,
        type,
        children: [p1, p2],
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
const onSelfChange = (state: Part[], current: string, type: string): Part[] => {
  return state.map((it) => {
    const { id, children = [] } = it;
    if (current === id) {
      return {
        ...it,
        type,
        children: [{ id: getuuid() }],
      };
    }
    if (children.length > 0) {
      return {
        ...it,
        children: onSelfChange(children, current, type),
      };
    }
    return it;
  });
};

export default function Editor() {
  const [current, select] = useState("");
  const [inputs, set] = useState<Part[]>([{ id: getuuid() }]);

  const transfer = useMemo(() => {
    const r = inputs
      .map((it) => {
        return handle(it);
      })
      .join("");
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: `<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">${r}</math>`,
        }}
      ></div>
    );
  }, [inputs]);

  const onAction = (type = "") => {
    if (!current) {
      return;
    }
    if (["equal", "add", "subtract", "multiply", "divide"].includes(type)) {
      set((state) => onPartChange(state, current, type));
    }
    if (["square", "sqrt"].includes(type)) {
      set((state) => onSelfChange(state, current, type));
    }
    select("");
  };

  useEffect(() => {
    if (!once) {
      return;
    }
    once = false;
    const container = document.getElementById("math-editor-container");
    if (container) {
      console.log(container);
      container.addEventListener("click", (e) => {
        const { id } = e.target as any;
        select(id);
      });
    }
  }, []);
  return (
    <>
      <div className=" flex flex-wrap justify-center mb-12">
        <button
          className=" w-12 bg-slate-100 m-2"
          onClick={() => onAction("add")}
        >
          {" "}
          +{" "}
        </button>
        <button
          className=" w-12 bg-slate-100 m-2"
          onClick={() => onAction("subtract")}
        >
          {" "}
          -{" "}
        </button>
        <button
          className=" w-12 bg-slate-100 m-2"
          onClick={() => onAction("multiply")}
        >
          {" "}
          *{" "}
        </button>
        <button
          className=" w-12 bg-slate-100 m-2"
          onClick={() => onAction("divide")}
        >
          {" "}
          /{" "}
        </button>
        <button
          className=" w-12 bg-slate-100 m-2"
          onClick={() => onAction("equal")}
        >
          {" "}
          ={" "}
        </button>
        <button
          className=" w-12 bg-slate-100 m-2"
          onClick={() => onAction("square")}
        >
          {" "}
          x²{" "}
        </button>
        <button
          className=" w-12 bg-slate-100 m-2"
          onClick={() => onAction("sqrt")}
        >
          {" "}
          &#x221A;{" "}
        </button>
      </div>
      <div id="math-editor-container">{transfer}</div>
    </>
  );
}
