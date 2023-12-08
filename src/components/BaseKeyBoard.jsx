import {
  Decal,
  PerspectiveCamera,
  RenderTexture,
  Text,
  useGLTF,
} from "@react-three/drei";
import Layout_65 from "../constants/layout_65";

export function BaseKeyBoard(props) {
  const { nodes, materials } = useGLTF("./models/base_key_cap.glb");

  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.274, 0.849]} rotation={[-2.195, 0, 0]} scale={0.1}>
        <group position={[-0.008, 9.167, 1.861]} rotation={[0.625, 0, 0]}>
          {Layout_65.map((pos) => (
            <group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_0002.geometry}
                material={materials.normalKeyCap}
                position={[pos["x"], pos["y"], 0]}
                rotation={[Math.PI, Math.PI, 0]}
              >
                <meshStandardMaterial
                  roughness={1}
                  metalness={0}
                  color="blue"
                ></meshStandardMaterial>
              </mesh>
            </group>
          ))}
        </group>
      </group>
    </group>
  );
}
useGLTF.preload("/base_key_cap.glb");
