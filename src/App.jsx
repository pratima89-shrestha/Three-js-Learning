import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function Box() {
  // Reference to the mesh object
  const meshRef = useRef();

  // Use the useFrame hook to update the rotation on every frame
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01; // Rotate on the x-axis
      meshRef.current.rotation.y += 0.01; // Rotate on the y-axis
    }
  });

  return (
    <mesh ref={meshRef} rotation={[0.9, 0.34, 0.79]}>
      {/* A cube geometry */}
      <boxGeometry args={[1.2, 1.3, 1.7]} />
      {/* A basic material */}
      <meshStandardMaterial color="black" />
    </mesh>
  );
}

function App() {
  return (
    <Canvas style={{ height: "100vh", background: "white" }}>
      {/* Add a light */}
      <ambientLight intensity={0.9} />
      {/* Add a rotating box */}
      <Box />
    </Canvas>
  );
}

export default App;
