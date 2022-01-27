import React, { useState, useRef, useCallback } from "react"
import { useFrame } from "@react-three/fiber"
import { Cylinder } from "@react-three/drei"
import { state } from "../store"

/**
 * Moles appear red when hovered on and above the field surface
 * They animate on the y-axis using sin function applying to the applications elapsed time
 */
export default function Mole({ args = [1, 1, 0.5, 32], offset = 0, position: [x, y, z], ...props }) {
  const ref = useRef()
  const [hovered, hover] = useState(false)
  const [aboveField, setAboveField] = useState(false)
  useFrame((state) => {
    ref.current.position.set(x, y + Math.sin(offset + state.clock.elapsedTime) * 0.5, z)
    ref.current.position.y > 1.25 ? setAboveField(true) : setAboveField(false)
  })
  const onClick = useCallback((e) => {
    e.stopPropagation()
    state.api.whac(ref.current.position)
  }, [])
  return (
    <group ref={ref} onClick={onClick} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>
      <Cylinder args={args} castShadow>
        <meshStandardMaterial color={hovered && aboveField ? "redorange" : "orange"}/>
      </Cylinder>
    </group>
  )
}