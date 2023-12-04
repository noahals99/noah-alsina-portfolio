import { useFrame } from '@react-three/fiber';
import { useState } from 'react';
import { useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { BoxGeometry, Vector3 } from 'three';
import { editable as e} from '@theatre/r3f'

function Box(props) {
    const [isActive, setIsActive] = useState(false);
    const { camera } = useThree();
    const boxRef = useRef();
    useFrame(({ clock }) => {
        boxRef.current.rotation.x = Math.sin(clock.getElapsedTime());
        boxRef.current.rotation.y = clock.getElapsedTime();
    });

    const clickHandle = () => {
        camera.position.y = 5;
    }

    
    return (
        <e.mesh theatreKey="Box" ref={boxRef} onPointerOver={() => setIsActive(!isActive)} onPointerLeave={() => setIsActive(!isActive)} onClick={clickHandle}>
            <boxGeometry args={[ 1, 1, 1 ]}/>
            <meshStandardMaterial color={isActive ? "blue":"red"}/>
        </e.mesh>
    )
}

export default Box