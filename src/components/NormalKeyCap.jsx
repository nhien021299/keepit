import React, { useRef, useState } from "react";
import {Decal, useGLTF, useTexture } from "@react-three/drei";
import { useControls } from "leva";

export function NormalKeyCap(props) {

    const { nodes, materials } = useGLTF("./models/base_key_cap.glb");
    const texture = useTexture("./models/textures/luffy2.png");

    const [pos, setPos] = useState([0,0,1.45]);
    const [scale, setScale] = useState(0.8);
    const [rough, setRoughness] = useState(1);
    const [metal, setMetalness] = useState(1);

    useControls({
        vertical:{
            min:-1,
            max:1,
            value:0,
            step:0.01,
            onChange: (value)=>{
                setPos((pos) => [pos[0], value, pos[2]])
            }
        },
        horizontal: {
            min:-1,
            max:1,
            value:0,
            step:0.01,
            onChange: (value)=>{
                setPos((pos) => [value, pos[1], pos[2]])
            }
        },
        depth: {
            min:0.6,
            max:2.3,
            value:1.45,
            step:0.01,
            onChange: (value)=>{
                setPos((pos) => [pos[0], pos[1], value])
            }
        },
        scale: {
            min:0,
            max:2,
            value:1,
            step:0.01,
            onChange: (value)=>{
                setScale(() => value)
            }
        },
        rough: {
            min:0,
            max:1,
            value:1,
            step:0.01,
            onChange: (value)=>{
                setRoughness(()=>value)
            }
        },
        metal: {
            min:0,
            max:1,
            value:1,
            step:0.01,
            onChange: (value)=>{
                setMetalness(()=>value)
            }
        },
    })

    return (
    <group {...props} dispose={null}>
        <group position={[0, 0.274, 0.849]} rotation={[-2.195, 0, 0]}>
        <group position={[0, 1.505, -0.615]} rotation={[0.625, 0, 0]}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_0002.geometry}
                material={materials.normalKeyCap}
            />
            <mesh 
            castShadow
            receiveShadow
            geometry={nodes.Object_0002_1.geometry}>
                <meshStandardMaterial transparent opacity={0}/>
                <Decal
                    debug
                    position={pos}
                    rotation={[0,0,Math.PI]}
                    scale={scale}
                >
                    <meshStandardMaterial
                        map={texture}
                        polygonOffset
                        polygonOffsetFactor={-1}
                        roughness={rough}
                        metalness={metal}
                        receiveShadow
                    />
                </Decal>
            </mesh>
        </group>
        </group>
    </group>
    );
}

useGLTF.preload("/normal_key_cap.glb");