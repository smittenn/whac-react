import React from "react"

/**
 * Creates two planes that form the floor and and background
 */
export default function Planes() {
  return (
    <group>
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1000, 1000]}/>
        <meshPhongMaterial color="hotpink"/>
      </mesh>
      <mesh position={[0, 0, -10]} rotation={[0, 0, Math.PI / 2]}>
        <planeGeometry args={[1000, 1000]}/>
        <meshPhongMaterial color="hotpink"/>
      </mesh>
    </group>
  )
}