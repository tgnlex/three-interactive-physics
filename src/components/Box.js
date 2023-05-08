import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useBox } from '@react-three/cannon'
export default function Box(props) {
  function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


  const [ref, api] = useBox(() => ({mass: 0.5}))
  
  //Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render loop
  // Rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += delta))
  // Return the view (3js elements expressed in jsx)
  return (
    <>
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 4 : 1}
      onClick={() => {
        api.velocity.set(0, 4, 0)
      }}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? getRandomColor() : 'orange'}  />
    </mesh>
    </>
    )
}

