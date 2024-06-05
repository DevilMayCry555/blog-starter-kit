"use client";

import { createRoot } from "react-dom/client";
import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

let once = false;

/**
 * 太阳
 * @param props
 * @returns
 */
function Sun(props: any) {
  const ref = useRef();
  // useFrame((state, delta) => {
  //   const current: any = ref.current;
  //   current.rotation.y += delta;
  // });
  return (
    <mesh {...props} ref={ref} scale={5}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshPhongMaterial emissive={0xffff00} />
    </mesh>
  );
}
/**
 * 地球
 * @param props
 * @returns
 */
function Earth(props: any) {
  const ref = useRef();
  // useFrame((state, delta) => {
  //   const current: any = ref.current;
  //   current.rotation.y += delta;
  // });
  return (
    <mesh {...props} ref={ref}>
      <sphereGeometry args={[1, 6, 6]} />
      <meshPhongMaterial emissive={0x112244} color={0x2233ff} />
    </mesh>
  );
}
/**
 * 月亮
 * @param props
 * @returns
 */
function Moon(props: any) {
  const ref = useRef();
  useFrame((state, delta) => {
    const current: any = ref.current;
    current.rotation.y += delta;
  });
  return (
    <mesh {...props} ref={ref} scale={0.2}>
      <sphereGeometry args={[1, 6, 6]} />
      <meshPhongMaterial emissive={0x7b7b7b} color={0xffffff} />
    </mesh>
  );
}
/**
 * 旋转
 * @param props
 * @returns
 */
function Rotate3D(props: any) {
  const ref = useRef();
  useFrame((state, delta) => {
    const current: any = ref.current;
    current.rotation.y += delta;
  });
  return <object3D {...props} ref={ref} />;
}

export default function Solar() {
  useEffect(() => {
    if (once) {
      return;
    }
    once = true;
    const node = document.getElementById("solar");
    if (node) {
      console.log("上帝视角 太阳系");
      const camera = new THREE.PerspectiveCamera(50, 2, 0.1, 2000);
      camera.position.set(0, 50, 0);
      camera.up.set(0, 0, 1);
      camera.lookAt(0, 0, 0);
      createRoot(node).render(
        <Canvas camera={camera}>
          <Rotate3D>
            <Sun />
            <Rotate3D position={[10, 0, 0]}>
              <Earth />
              <Moon position={[2, 0, 0]} />
            </Rotate3D>
          </Rotate3D>
          {/* 点光源 */}
          <pointLight
            position={[0, 0, 0]}
            intensity={Math.PI}
            color={0xffffff}
            decay={0}
          />
        </Canvas>
      );
    }
  }, []);
  return (
    <div
      id="solar"
      style={{
        height: 600,
        backgroundColor: "#000000",
      }}
    ></div>
  );
}
