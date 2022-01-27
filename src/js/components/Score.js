import React from "react"
import { Text } from "@react-three/drei"
import { useSnapshot } from "valtio"
import { state } from "../store"

/**
 * The score displays the number of moles you hit this session
 */
export default function Score() {
  const { score } = useSnapshot(state)
  return (
    <group>
      <Text anchorX="center" anchorY="middle" position={[0, 5, -2]} fontSize={.25}>
        SCORE
      </Text>
      <Text anchorX="center" anchorY="middle" position={[0, 4, -2]} fontSize={2}>
        { score }
      </Text>
    </group>
  )
}