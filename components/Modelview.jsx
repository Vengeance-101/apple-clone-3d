import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  View,
} from "@react-three/drei";

import React, { Suspense } from "react";
import Lights from "./Lights";
import Iphone from "./Iphone";
import * as THREE from "three";
import Loader from "./loader";
const Modelview = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  size,
  item,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? "right-[-100%]" : ""}`}
      position={[0, 0, 0]}
    >
      {/* ambient light */}
      <ambientLight intensity={0.5} />

      {/* camera */}
      <PerspectiveCamera makeDefault position={[0, 0, 3.5]} />

      {/* lights */}
      <Lights />

      {/* orbit controls */}
      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => {
          if (controlRef && controlRef.current) {
            setRotationState(controlRef.current.getAzimuthalAngle());
          }
        }}
      />

      {/* 3D model group */}
      <group ref={groupRef} name={index === 1 ? "small" : ""}>
        <Suspense
          fallback={
            <Html>
              <Loader />
            </Html>
          }
        >
          <Iphone
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default Modelview;
