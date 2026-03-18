import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
// Use the standard import path for maath
import * as random from 'maath/random'

export function StarsBackground(props: any) {
  const ref: any = useRef(null)
  
  const [sphere] = useState(() => {
    const data = new Float32Array(5000 * 3);
    return random.inSphere(data, { radius: 1.5 }) as Float32Array;
  })

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    </group>
  )
}
