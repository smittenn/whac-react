import * as THREE from "three"
import React, { useState, useRef, useCallback } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text, Cylinder, useGLTF } from "@react-three/drei"
import { Physics, useBox } from "@react-three/cannon"
import { proxy, useSnapshot } from "valtio"

const state = proxy({
  count: 0,
  isSwinging: false,
  api: {
    whac(position) {
      state.isSwinging = true
      setTimeout(() => state.isSwinging = false, 400)
      if (position.y > 1.25) {
        ++state.count
      }
    }
  }
})

/**
 * The score keeps track of the number of moles you have whac'd this session
 */
function Score() {
  const { count } = useSnapshot(state)
  return (
    <Text anchorX="center" anchorY="middle" position={[0, 4, -2]} fontSize={2}>
      {count}
    </Text>
  )
}

/**
 * The mallet that follows the mouse. When a mole is clicked the mallet swings
 */
function Mallet() {
  const { isSwinging } = useSnapshot(state)
  const model = useRef()
  const { nodes, materials } = useGLTF("./mallet.glb")
  const [ref, api] = useBox(() => ({
    type: "Kinematic",
    args: [3.4, 1, 3.5]
  }))
  useFrame((state) => {
    model.current.rotation.x = THREE.MathUtils.lerp(model.current.rotation.x, 0, 0.2)
    model.current.rotation.y = THREE.MathUtils.lerp(model.current.rotation.y, (state.mouse.x * Math.PI) / 10, 0.2)
    if (isSwinging) {
      api.rotation.set(0.15, 0.75, 1.5)
    } else {
      api.rotation.set(0, 0, model.current.rotation.y)
    }
    api.position.set(state.mouse.x * 10, 2.75, state.mouse.y * (state.mouse.y < 0 ? -30 : -5))
  })
  return (
    <group ref={ref}>
      <group ref={model} position={[-0.05, 0.35, 0.3]} scale={0.15}>
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

/**
 * The field that sits under the moles. It is generated via GLB and has no collision
 */
function Field(props) {
  const ref = useRef()
  const { nodes, materials } = useGLTF("./field.glb")
  return (
    <mesh ref={ref} dispose={null} receiveShadow material={materials.Field} geometry={nodes.Field001.geometry} scale={[5, 1.5, 5]} position={[0,0,1]}/>
  )
}

/**
 * Moles appear red when hovered and animate using a sin function
 */
function Mole({ args = [1, 1, 0.5, 32], offset = 0, position: [x, y, z], ...props }) {
  const ref = useRef()
  const [hovered, hover] = useState(false)
  useFrame((state) => ref.current.position.set(
    x,
    y + Math.sin(offset + state.clock.elapsedTime) * 0.5,
    z
  ))
  const onClick = useCallback((e) => {
    e.stopPropagation()
    state.api.whac(ref.current.position)
  }, [])
  return (
    <group ref={ref} onClick={onClick} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>
      <Cylinder args={args} castShadow>
        <meshStandardMaterial color={hovered ? "redorange" : "orange"}/>
      </Cylinder>
    </group>
  )
}

/**
 * Creates two planes that form the floor and and background
 */
function Planes() {
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
      </Physics>
			<Score/>
    </Canvas>
  )
}
