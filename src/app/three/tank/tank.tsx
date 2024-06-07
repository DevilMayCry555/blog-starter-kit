"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { createRoot } from "react-dom/client";

let once = false;

const Train = ({ curve, ...rest }: any) => {
  const trainRef = useRef<THREE.Mesh>();
  const [t, setT] = useState(0);

  useFrame(() => {
    setT((t) => (t + 0.001) % 1);
    const point = curve.getPointAt(t);
    const tangent = curve.getTangentAt(t).normalize();
    const current = trainRef.current;
    if (current) {
      // Adjust the train's position and orientation
      current.position.set(point.x, point.y, point.z);
      const up = new THREE.Vector3(0, 1, 0);
      const axis = new THREE.Vector3().crossVectors(up, tangent).normalize();
      const radians = Math.acos(up.dot(tangent));
      current.quaternion.setFromAxisAngle(axis, radians);
    }
  });

  return (
    <mesh {...rest} ref={trainRef} position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 2]} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
};

const Scene = () => {
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-10, 0, 10),
    new THREE.Vector3(-5, 5, 5),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(5, -5, 5),
    new THREE.Vector3(10, 0, 10),
  ]);

  return (
    <Canvas camera={{ position: [0, 10, 20], fov: 50 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Train curve={curve} />
      <OrbitControls />
      <mesh>
        <tubeGeometry args={[curve, 100, 0.2, 8, false]} />
        <meshStandardMaterial color={"blue"} />
      </mesh>
    </Canvas>
  );
};

export default function Tank() {
  useEffect(() => {
    if (once) {
      return;
    }
    once = true;
    const node = document.getElementById("tank");
    if (node) {
      createRoot(node).render(<Scene />);
    }
  }, []);
  return (
    <div id="tank" style={{ height: 600, boxShadow: "inset 0 0 5px red" }}>
      <span>抱歉，浏览器不支持画布。</span>
    </div>
  );
}
