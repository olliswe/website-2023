import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Group, Object3DEventMap } from "three";

const Poly = ({ ...props }) => {
  const { nodes } = useGLTF("/assets/models/model.glb");
  const groupRef = useRef<Group<Object3DEventMap>>(null);

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
        scale={7}
        position={[0, 0, 0]}
        rotation={[-1.9, -0.1, 2.9]}
      ></mesh>
    </group>
  );
};

useGLTF.preload("/assets/models/model.glb");

export default Poly;
