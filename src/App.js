import React from 'react';
import {Canvas} from '@react-three/fiber'
import { Physics} from '@react-three/cannon'
import { OrbitControls} from '@react-three/drei'
import './style.css';

import Box from './components/Box'
import Plane from './components/Plane'

export default function App() {
  return (
    <div id="canvas-container" class="flex-container">
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />        
        <Physics>
          <Box />
          <Plane /> 
        </Physics>
      </Canvas>
    </div>
  )
}
