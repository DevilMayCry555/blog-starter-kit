import React, { useState, useEffect } from "react";
import MathJax from "mathjax";

const MathJaxEditor = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://polyfill.io/v3/polyfill.min.js?features=es6";
    script.async = true;
    document.head.appendChild(script);

    const mathJaxScript = document.createElement("script");
    mathJaxScript.id = "MathJax-script";
    mathJaxScript.async = true;
    mathJaxScript.src =
      "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
    document.head.appendChild(mathJaxScript);
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setOutput(`$$${e.target.value}$$`);
    MathJax.typesetPromise();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>MathJax Formula Editor</h1>
      <textarea
        value={input}
        onChange={handleInputChange}
        placeholder="Enter LaTeX here"
        style={{ width: "100%", height: "100px", marginBottom: "20px" }}
      />
      <div
        className="output"
        dangerouslySetInnerHTML={{ __html: output }}
        style={{ border: "1px solid #ccc", padding: "10px" }}
      />
    </div>
  );
};

export default MathJaxEditor;
