import * as THREE from "three"
import React, { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import { useSnapshot } from "valtio"
import { state } from "../store"

/**
 * The mallet that follows the mouse. When a mole is clicked the mallet swings
 */
export default function Mallet() {
  const { isSwingingForward, isSwingingBackward } = useSnapshot(state)
  const { nodes, materials } = useGLTF("./mallet.glb")
  const outer = useRef()
  const inner = useRef()
  useFrame((state) => {
    inner.current.rotation.x = THREE.MathUtils.lerp(inner.current.rotation.x, 0, 0.2)
    inner.current.rotation.y = THREE.MathUtils.lerp(inner.current.rotation.y, (state.mouse.x * Math.PI) / 10, 0.2)
    if (isSwingingForward) {
      outer.current.rotation.x += 0.15
      outer.current.rotation.y += 0.25
      outer.current.rotation.z += 0.45
    } else if (isSwingingBackward) {
      outer.current.rotation.x -= 0.15
      outer.current.rotation.y -= 0.25
      outer.current.rotation.z -= 0.45
    }
    else {
      outer.current.rotation.set(0, 0, inner.current.rotation.y)
    }
    outer.current.position.set(state.mouse.x * 10, 2.75, state.mouse.y * (state.mouse.y < 0.25 ? -30 : -5))
  })
  return (
    <group ref={outer}>
      <group ref={inner} position={[-0.05, 0.35, 0.3]} scale={0.15}>
        <group rotation={[1.85, -0.35, 2.35]} scale={[2.95, 2.95, 2.95]}>
          <primitive object={nodes.Bone} />
          <primitive object={nodes.Bone003} />
          <primitive object={nodes.Bone006} />
          <primitive object={nodes.Bone010} />
          <skinnedMesh castShadow receiveShadow material={materials.glove} material-roughness={1} geometry={nodes.arm.geometry} skeleton={nodes.arm.skeleton} />
        </group>
        <group rotation={[0, -0.05, 0]} scale={141.95}>
          <mesh castShadow receiveShadow material={materials.wood} geometry={nodes.hand.geometry} />
        </group>
      </group>
    </group>
  )
}