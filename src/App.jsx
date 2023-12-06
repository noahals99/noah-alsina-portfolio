import { useState } from 'react'
import { PerspectiveCamera } from '@react-three/drei'
import Box from './components/Box'
import './style/App.css'
import { Canvas } from '@react-three/fiber'
import { getProject } from '@theatre/core'

import { SheetProvider } from '@theatre/r3f'
import { editable as e} from '@theatre/r3f'
import starsState from './animation/stars-opening.json'
import Stars from './components/Stars'
import { useEffect } from 'react'
import { useRef } from 'react'
import ContentDisplay from './components/ContentDisplay'
import { motion } from 'framer-motion'


const EditableCamera = e(PerspectiveCamera, 'perspectiveCamera')




const portfolioSheet = getProject('Portfolio Project', { state: starsState }).sheet('Portfolio Sheet')

function App() {
  const [blackscreenOpacity, setBlackscreenOpacity] = useState(1);

  const initialBlackscreen = useRef();
  const enterButton = useRef();
  const contentDisplay = useRef();
  const introContainerRef = useRef();

  const beginHandle = () => {
    function handelingFunction(){
      portfolioSheet.project.ready.then(() => portfolioSheet.sequence.play({ iterationCount: 1, range: [0,10]}));
    }
    enterButton.current.style.opacity = 0;
    introContainerRef.current.style.opacity = 0;
    setTimeout(() => {
      enterButton.current.style.display = "none";
      introContainerRef.current.style.display = "none";
    }, 1000)

    setTimeout(() => {
      contentDisplay.current.style.display = "flex";
    }, 7000)

    setTimeout(() => {
      contentDisplay.current.style.opacity = 1;
    }, 7010)

    setTimeout(handelingFunction,400);
    
  }
  useEffect(() => {
    initialBlackscreen.current.style.opacity = 0;
    setTimeout(() => {
      enterButton.current.style.opacity = 1;
    }, 4000)
    setTimeout(() => {
      initialBlackscreen.current.style.display = "none";
    }, 3400)

  },[blackscreenOpacity])

  return (
    <div id='display-container'>
      <div id='initial-black-screen' ref={initialBlackscreen}></div>
      <div id='canvas-container'>
        <Canvas camera={{position: [0, 0, 0]}} style={{ background: "#0c0014", display:"fixed"}}>
          <SheetProvider sheet={portfolioSheet}>
            <EditableCamera makeDefault theatreKey="Camera"/>
            <ambientLight intensity={0.1}/>
            <Stars/>
          </SheetProvider>
        </Canvas>
      </div>
      
      <div id='intro-container' ref={introContainerRef}>
        <motion.p
        id='intro-name'
        initial={{y:20, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{
          duration:1.5,
          delay:1.5
        }}
        >Hello, I'm <motion.span id='name-highlight' initial={{color:"#ffffff"}} animate={{color:"#ff0000"}} transition={{delay:3, duration:0.5, type:"linear"}}>Noah Alsina</motion.span>.</motion.p>
        <motion.p
        id='intro-description'
        initial={{y:20, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{
          duration:1.5,
          delay:2.5
        }}
        >I am a full stack web developer.</motion.p>
      </div>
      <div id='begin-button-container'>
        <button className='begin-button' onClick={beginHandle} ref={enterButton}>Enter</button>
      </div>
      <div id='content-display-outer-container' ref={contentDisplay}>
        <ContentDisplay/>
      </div>
      
    </div>
  )
}

export default App
