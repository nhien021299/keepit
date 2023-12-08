import { ContactShadows, Environment, OrbitControls, useTexture } from "@react-three/drei";
import { NormalKeyCap } from "./NormalKeyCap";

const Experience = () => {
    return (
        <>
            <OrbitControls />
            <directionalLight castShadow position={[1,2,3]} intensity={1}/>
            <ambientLight intensity={0.25}/>
            
            <NormalKeyCap />
            
            <ContactShadows position-y={-0.5} opacity={0.1} blur={2}/>
            <Environment preset="city"/>
        </>
     
    );
}

export default Experience;