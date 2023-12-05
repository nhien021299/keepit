import React, { useRef, useState } from "react";
import {Decal, useGLTF, useTexture } from "@react-three/drei";
import { useControls } from "leva";

export function NormalKeyCap(props) {

    const { nodes, materials } = useGLTF("./models/base_key_cap_2.glb");
    const texture = useTexture("./models/textures/sukuna.png");

    const [pos, setPos] = useState([0,0,1.45]);
    const [scale, setScale] = useState(0.8);
    const [rough, setRoughness] = useState(1);
    const [metal, setMetalness] = useState(1);

    // useControls({
    //     vertical:{
    //         min:-1,
    //         max:1,
    //         value:0,
    //         step:0.01,
    //         onChange: (value)=>{
    //             setPos((pos) => [pos[0], value, pos[2]])
    //         }
    //     },
    //     horizontal: {
    //         min:-1,
    //         max:1,
    //         value:0,
    //         step:0.01,
    //         onChange: (value)=>{
    //             setPos((pos) => [value, pos[1], pos[2]])
    //         }
    //     },
    //     depth: {
    //         min:0.6,
    //         max:2.3,
    //         value:1.45,
    //         step:0.01,
    //         onChange: (value)=>{
    //             setPos((pos) => [pos[0], pos[1], value])
    //         }
    //     },
    //     scale: {
    //         min:0,
    //         max:2,
    //         value:1,
    //         step:0.01,
    //         onChange: (value)=>{
    //             setScale(() => value)
    //         }
    //     },
    //     rough: {
    //         min:0,
    //         max:1,
    //         value:1,
    //         step:0.01,
    //         onChange: (value)=>{
    //             setRoughness(()=>value)
    //         }
    //     },
    //     metal: {
    //         min:0,
    //         max:1,
    //         value:1,
    //         step:0.01,
    //         onChange: (value)=>{
    //             setMetalness(()=>value)
    //         }
    //     },
    // })

    return (
        <group {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2004.geometry}
            material={materials["Small_Buttons.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2004_1.geometry}
            material={materials["Big_Buttons.006"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2004_2.geometry}
          >
          <meshBasicMaterial/>
            <Decal
                debug
                map={texture}
                polygonOffset
                polygonOffsetFactor={-1}
                scale={1}
                position={[-1,0.4,0]}
                rotation={[0,0,0]}
            />

          </mesh>
        </group>
      </group>
      );
}

useGLTF.preload("/base_key_cap_2.glb");