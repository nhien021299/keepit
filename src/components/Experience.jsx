import { Environment, OrbitControls,ContactShadows } from "@react-three/drei";
import { NormalKeyCap } from "./NormalKeyCap";
import { BaseKeyBoard } from "./BaseKeyBoard";

const Experience = () => {
  return (
    <>
      <OrbitControls />
      <BaseKeyBoard />
      {/* <NormalKeyCap /> */}

      <ContactShadows position-y={-0.5} opacity={0.1} blur={1}/>
      <Environment preset="studio"/>
    </>
  );
};

export default Experience;
