import React, { useRef } from "react";
import {Plane, useGLTF, useTexture } from "@react-three/drei";

export function NormalKeyCap(props) {

    const { nodes, materials } = useGLTF("./models/normal_key_cap.glb");
    // const colorMap = useTexture("./models/textures/chainsaw-main.jpeg");

    return (
    <group {...props} dispose={null}>
        <group position={[0, 0.274, 0.849]} rotation={[-2.195, 0, 0]}>
        <group position={[0, 1.505, -0.615]} rotation={[0.625, 0, 0]}>
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_0001.geometry}
            material={materials.initialShadingGroup}
            />
            <mesh 
            castShadow
            receiveShadow
            geometry={nodes.Object_0001_1.geometry}>
                <meshBasicMaterial transparent opacity={0}/>
                {/* <Decal
                    debug
                    position={[0,0,0]}
                    rotation={[0,0,0]}
                >
                    <meshBasicMaterial
                        // map={texture}
                        polygonOffset
                        polygonOffsetFactor={-1}
                    />
                </Decal> */}
            </mesh>
        </group>
        </group>
    </group>
    );
}

useGLTF.preload("/normal_key_cap.glb");