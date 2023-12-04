import { useState } from 'react'
import * as THREE from 'three'
import { createRoot } from 'react-dom/client'
import { useFrame, useThree } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import Box from './components/Box'
import './style/App.css'
import { Canvas } from '@react-three/fiber'
import { getProject } from '@theatre/core'
import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'
import { SheetProvider } from '@theatre/r3f'
import { editable as e} from '@theatre/r3f'
import starsState from '../public/animation/stars-opening.json'
import Stars from './components/Stars'
import { useEffect } from 'react'
import { useRef } from 'react'
import ContentDisplay from './components/ContentDisplay'


const EditableCamera = e(PerspectiveCamera, 'perspectiveCamera')

if (import.meta.env.DEV) {
  studio.initialize();
  studio.extend(extension);
}
const portfolioSheet = getProject('Portfolio Project', { state: starsState }).sheet('Portfolio Sheet')

function App() {
  const [blackscreenOpacity, setBlackscreenOpacity] = useState(1);

  const initialBlackscreen = useRef();
  const enterButton = useRef();

  const beginHandle = () => {
    portfolioSheet.project.ready.then(() => portfolioSheet.sequence.play({ iterationCount: 1, range: [0,10]}));
    enterButton.current.style.opacity = 0;
    setTimeout(() => {
      enterButton.current.style.display = "none";
    }, 1000)
  }
  useEffect(() => {
    initialBlackscreen.current.style.opacity = 0;
    setTimeout(() => {
      enterButton.current.style.opacity = 1;
    }, 2500)
    setTimeout(() => {
      initialBlackscreen.current.style.display = "none";
    }, 3400)

  },[blackscreenOpacity])

  return (
    <div id='canvas-container'>
      <div id='initial-black-screen' ref={initialBlackscreen}></div>
      <Canvas camera={{position: [0, 0, 0]}} style={{ background: "#0c0014" }}>
        <SheetProvider sheet={portfolioSheet}>
          <EditableCamera makeDefault theatreKey="Camera"/>
          <ambientLight intensity={0.1}/>
          <Stars/>
        </SheetProvider>
      </Canvas>
      <div id='begin-button-container'>
        <button class='begin-button' onClick={beginHandle} ref={enterButton}>Enter</button>
      </div>
      <div id='content-display-outer-container'>
        <ContentDisplay/>
      </div>
      
    </div>
  )
}

export default App
