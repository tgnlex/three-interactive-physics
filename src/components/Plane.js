import React from 'react'
import { usePlane } from '@react-three/cannon'
export default function Plane() {
      const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
    }))
    return (
        <mesh ref={ref} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeBufferGeometry attach="geometry" args={[100, 100]}/>
          <meshLambertMaterial attach="material" color="lightblue" />
        </mesh>

    );
}