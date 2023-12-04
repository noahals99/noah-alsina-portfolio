import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import { editable as e} from '@theatre/r3f'

function Stars(props) {
    const ref = useRef()
    const [sphere] = useState(() => random.inSphere(new Float32Array(50000), { radius: 5 }))
    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 25
        ref.current.rotation.y -= delta / 35
    })
    return (
        <e.group rotation={[0, 0, Math.PI / 4]} theatreKey="Stars">
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial transparent color="white" size={0.005} sizeAttenuation={true} depthWrite={false} />
            </Points>
        </e.group>
    )
}

export default Stars