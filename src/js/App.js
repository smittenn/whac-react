import React from "react"
import { Canvas } from "@react-three/fiber"
import { Physics } from "@react-three/cannon"

import Score from "./components/Score"
import Mallet from "./components/Mallet"
import Field from "./components/Field"
import Mole from "./components/Mole"
import Planes from "./components/Planes"

export default function App() {
  return (
    <Canvas shadows camera={{ position: [0, 5, 12], fov: 50 }}>
      <color attach="background" args={["#232021"]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[-10, -10, -10]} />
      <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} intensity={1} castShadow shadow-mapSize={[2048, 2048]} shadow-bias={-0.0001} />
      <Physics iterations={6} tolerance={0.0001} gravity={[0, -40, 0]}>
        <Planes/>
        <Field/>
        {Array.from({ length: 3 }, (i, idx) => (
          <Mole key={idx} position={[-2.8 + idx * 2.8, 1, -2]} offset={10000 * idx} />
        ))}
        {Array.from({ length: 3 }, (i, idx) => (
          <Mole key={idx} position={[-2.8 + idx * 2.8, 1, 1]} offset={10000 * idx + 1} />
        ))}
        {Array.from({ length: 3 }, (i, idx) => (
          <Mole key={idx} position={[-2.8 + idx * 2.8, 1, 4]} offset={10000 * idx + 2} />
        ))}
        <Mallet/>
        <Score/>
      </Physics>
    </Canvas>
  )
}
