/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 scene.gltf 
Author: FishyBusiness (https://sketchfab.com/FishyBusiness)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/retro-computer-v2-58a3890be360441cad5d5c089ccc3b32
Title: Retro Computer V2
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -Math.PI]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Object_5.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Object_7.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Object_9.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Object_11.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Object_13.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Object_15.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Object_17.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Object_19.geometry} material={materials.material_0} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')