import React from "react";
import { Canvas } from "@react-three/fiber";

function Box() {
  return (
    <mesh rotation={[0.4, 0.2, 0]}>
      {/* A cube geometry */}
      <boxGeometry args={[1, 1, 1]} />
      {/* A basic material */}
      <meshStandardMaterial color="green" />
    </mesh>
  );
}

function App() {
  return (
    <Canvas style={{ height: "100vh", background: "#272727" }}>
      {/* Add a light */}
      <ambientLight intensity={0.5} />
      {/* Add a rotating box */}
      <Box />
    </Canvas>
  );
}

export default App;
