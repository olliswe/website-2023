import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React, { Suspense } from "react";
import Poly from "./Poly";
// @ts-ignore
import useSound from "use-sound";
// @ts-ignore

const Model = () => {
  const [play, { stop }] = useSound("/assets/sounds/background-hum.mp3");

  return (
    <Canvas
      camera={{ position: [5, 5, 5], zoom: 1 }}
      style={{ cursor: "move" }}
      onPointerDown={() => {
        play();
      }}
      onPointerUp={() => {
        stop();
      }}
      onMouseLeave={() => {
        stop();
      }}
    >
      <OrbitControls autoRotate={true} enableZoom={false} />
      <ambientLight />
      {/*<OrbitControls />*/}
      <Suspense fallback={null}>
        <Poly />
      </Suspense>
    </Canvas>
  );
};

export { Model };
