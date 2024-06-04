"use client";

import { useEffect } from "react";
import * as THREE from "three";

let once = false;
export default function ThreeDemo() {
  useEffect(() => {
    if (once) {
      return;
    }
    once = true;
    const innerWidth = 800;
    const innerHeight = 600;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      innerWidth / innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(innerWidth, innerHeight);
    document.getElementById("tydly")?.appendChild(renderer.domElement);
    // 正方体
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    console.log(cube);
    scene.add(cube);
    camera.position.z = 5;
  }, []);
  return (
    <main>
      <div className=" flex justify-center p-8">
        <div id="tydly" className=" shadow-red-300 shadow-md"></div>
      </div>
    </main>
  );
}
