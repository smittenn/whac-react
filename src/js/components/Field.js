import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"

/**
 * The field that the moles sit in. It is generated via .glb file and has no collision
 */
export default function Field(props) {
  const ref = useRef()
  const { nodes, materials } = useGLTF("./field.glb")
  return (
    <mesh ref={ref} dispose={null} receiveShadow material={materials.Field} geometry={nodes.Field001.geometry} scale={[5, 1.5, 5]} position={[0,0,1]}/>
  )
}