"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { createRoot } from "react-dom/client";

const curve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(-20, 0, 10),
  new THREE.Vector3(-10, 0, -10),
  new THREE.Vector3(-5, 0, 5),
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(5, 0, -5),
  new THREE.Vector3(10, 0, 10),
  new THREE.Vector3(20, 0, -10),
]);

const Train = ({ curve: Curve, order, init, ...rest }: any) => {
  const curve: THREE.CatmullRomCurve3 = Curve;
  const trainRef = useRef<THREE.Mesh>();
  const [t, setT] = useState(Number(init));

  useFrame(() => {
    setT((t) => (t + 0.002) % 1);
    // t小于0会报错
    if (t < 0) {
      return;
    }
    // 根据弧长返回曲线上给定位置的点
    const point = curve.getPointAt(t);
    // 返回一个点处的切线s
    const tangent = curve.getTangentAt(t).normalize();
    const current = trainRef.current;
    if (current) {
      // Adjust the train's position and orientation
      current.position.set(point.x, point.y, point.z);
      const up = new THREE.Vector3(1, 0, 0);
      // crossVectors(a,b) a与b的叉积 即与a，b都垂直
      const axis = new THREE.Vector3().crossVectors(up, tangent).normalize();
      // dot 返回该v与参v的点积
      // 计算机图形学常用来判断方向，如两向量点积大于0，则它们的方向朝向相近；如果小于0，则方向相反
      // Math.acos 返回一个数的反余弦值（单位为弧度）
      const radians = Math.acos(up.dot(tangent));
      // quaternion 四元数在three.js中用于表示 rotation （旋转）
      current.quaternion.setFromAxisAngle(axis, radians);
      // up指向x正轴，则它与切线的叉积指向y正轴，点积指向两向量的同向
      // console.log(axis, radians);
    }
  });
  return (
    <mesh {...rest} ref={trainRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={order === 0 ? "red" : "green"} />
    </mesh>
  );
};
const Trains = () => {
  const [c, setC] = useState(3);
  const [t, setT] = useState(0); // 检测第一个方块
  // 时间总线
  useFrame(() => {
    setT((t) => (t + 0.002) % 1);
    // 过中心点时长度+1
    if (t + 0.002 > 0.499 && t + 0.002 < 0.501) {
      setC((state) => state + 1);
    }
  });

  return (
    <>
      {Array(c)
        .fill(t)
        .map((it, idx) => (
          <Train
            key={idx}
            curve={curve}
            init={it - (idx * 2) / 100}
            order={idx}
          />
        ))}
    </>
  );
};
function CustomCamera() {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(0, 20, 0);
    // camera.up.set(0, 0, 1);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return null;
}
const Scene = () => {
  const [f, setF] = useState([{ x: 0, y: 0, z: 0 }]);
  return (
    <Canvas>
      <CustomCamera />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Trains />
      <OrbitControls />
      <mesh>
        {/* path — Curve - 一个由基类Curve继承而来的3D路径。 Default is a quadratic bezier curve.
            tubularSegments — Integer - 组成这一管道的分段数，默认值为64。
            radius — Float - 管道的半径，默认值为1。
            radialSegments — Integer - 管道横截面的分段数目，默认值为8。
            closed — Boolean 管道的两端是否闭合，默认值为false。 */}
        <tubeGeometry args={[curve, 200, 0.2, 8, false]} />
        <meshStandardMaterial color={"blue"} />
      </mesh>
      {f.map((it, idx) => {
        const { x, y, z } = it;
        return (
          <mesh position={[x, y, z]} scale={0.5} key={idx}>
            <sphereGeometry args={[1, 12, 12]} />
            <meshStandardMaterial color={"red"} />
          </mesh>
        );
      })}
    </Canvas>
  );
};

export default function Tank() {
  useEffect(() => {
    const node = document.getElementById("tank");
    if (node) {
      createRoot(node).render(<Scene />);
    }
  }, []);
  return (
    <div id="tank" style={{ height: 300, boxShadow: "inset 0 0 5px red" }}>
      <span>抱歉，浏览器不支持画布。</span>
    </div>
  );
}
