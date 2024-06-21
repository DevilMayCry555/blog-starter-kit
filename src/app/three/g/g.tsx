"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import { createRoot } from "react-dom/client";
import * as THREE from "three";

function Ball(props: any) {
  const ballRef = useRef<THREE.Mesh>();
  const [velocity, setVelocity] = useState(0);
  const [position, setPosition] = useState(5);
  const gravity = -9.8;
  const damping = 0.7;

  useFrame((state, delta) => {
    if (ballRef.current) {
      // 更新速度和位置
      let newVelocity = velocity + gravity * delta;
      let newPosition = position + newVelocity * delta;

      // 处理碰撞和反弹
      if (newPosition < 0.5) {
        newPosition = 0.5;
        newVelocity = -newVelocity * damping;
      }

      setVelocity(newVelocity);
      setPosition(newPosition);

      // 更新球的位置
      ballRef.current.position.y = newPosition;
    }
  });

  return (
    <mesh {...props} ref={ballRef} position={[0, position, 0]}>
      <Sphere args={[0.5, 32, 32]}>
        <meshStandardMaterial color="orange" />
      </Sphere>
    </mesh>
  );
}

function Scene() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Ball />
      {/* 原点 */}
      <mesh position={[0, 0, 0]} scale={0.1}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"red"} />
      </mesh>
    </Canvas>
  );
}
let once = false;
export default function G() {
  useEffect(() => {
    if (once) {
      return;
    }
    once = true;
    const node = document.getElementById("threeg");
    if (node) {
      createRoot(node).render(<Scene />);
    }
  }, []);
  return (
    <div id="threeg" style={{ height: 300, boxShadow: "inset 0 0 5px red" }}>
      <span>抱歉，浏览器不支持画布。</span>
    </div>
  );
}
