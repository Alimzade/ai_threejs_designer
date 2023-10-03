import React, { useRef } from 'react'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'

const Backdrop = () => {
  const shadows = useRef();

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={30}
      alphaTest={0.80}
      scale={3.5}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={4}
        radius={25}
        intensity={0.55}
        ambient={0.35}
        position={[5, 5, -15]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-8, 5, -5]}
      />
    </AccumulativeShadows>
  )
}

export default Backdrop