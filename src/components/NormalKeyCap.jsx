import React, { useRef, useState } from "react";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { useControls } from "leva";

export function NormalKeyCap(props) {
  const { nodes, materials } = useGLTF("./models/base_key_cap_2.glb");

  const texture = useTexture("./models/textures/sukuna.png");

  const [pos, setPos] = useState([-1.5, 0, 0]);
  const [scale, setScale] = useState(3.2);
  const [rough, setRoughness] = useState(1);
  const [metal, setMetalness] = useState(1);

  const ratio = 1.8;

  const positions = [-2, -1, 0, 1, 2];

  useControls({
    vertical: {
      min: -1,
      max: 1.8,
      value: 0,
      step: 0.01,
      onChange: (value) => {
        setPos((pos) => [pos[0], value, pos[2]]);
      },
    },
    horizontal: {
      min: -4.7,
      max: 1.7,
      value: -1.5,
      step: 0.01,
      onChange: (value) => {
        setPos((pos) => [value, pos[1], pos[2]]);
      },
    },
    scale: {
      min: 0,
      max: 10,
      value: 3.2,
      step: 0.1,
      onChange: (value) => {
        setScale(() => value);
      },
    },
    rough: {
      min: 0,
      max: 1,
      value: 1,
      step: 0.01,
      onChange: (value) => {
        setRoughness(() => value);
      },
    },
    metal: {
      min: 0,
      max: 1,
      value: 1,
      step: 0.01,
      onChange: (value) => {
        setMetalness(() => value);
      },
    },
  });

  return (
    <group {...props} dispose={null}>
    
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2004.geometry}
        material={materials["Small_Buttons.003"]}
      ></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2004_1.geometry}
        material={materials["Big_Buttons.006"]}
      ></mesh>
      <mesh geometry={nodes.Object_2004_2.geometry}>
        <meshStandardMaterial transparent opacity={0} />
        <Decal
          debug={false}
          position={pos}
          rotation={[0, 0, 0]}
          scale={[scale, scale / ratio, 1]}
        >
          <meshStandardMaterial
            map={texture} // Position of the decal
            roughnessMap={texture}
            polygonOffset
            polygonOffsetFactor={-1}
            roughness={rough}
            metalness={metal}
          />
        </Decal>
      </mesh>
    </group>
  );
}
useGLTF.preload("/base_key_cap_2.glb");
