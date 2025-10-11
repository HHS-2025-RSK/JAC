import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const ref = useRef<THREE.Points>(null);
  const { camera } = useThree();

  const particlesCount = 2000;
  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.getElapsedTime();
      ref.current.rotation.y = time * 0.05;
      ref.current.rotation.x = Math.sin(time * 0.1) * 0.1;

      // Cursor influence
      const targetRotationY = mousePosition.x * 0.3;
      const targetRotationX = -mousePosition.y * 0.3;
      
      camera.position.x += (targetRotationY - camera.position.x) * 0.05;
      camera.position.y += (targetRotationX - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#C4A84E"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function LightStreaks() {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.getElapsedTime();
      ref.current.rotation.z = time * 0.1;
    }
  });

  return (
    <group ref={ref}>
      {[...Array(8)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i / 8) * Math.PI * 2) * 5,
            Math.sin((i / 8) * Math.PI * 2) * 5,
            -5
          ]}
          rotation={[0, 0, (i / 8) * Math.PI * 2]}
        >
          <planeGeometry args={[0.1, 15]} />
          <meshBasicMaterial
            color="#C4A84E"
            transparent
            opacity={0.1}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

interface HeroSceneProps {
  mousePosition: { x: number; y: number };
}

export const HeroScene = ({ mousePosition }: HeroSceneProps) => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#0d2d24']} />
        <fog attach="fog" args={['#0d2d24', 10, 50]} />
        
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#C4A84E" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#FF9500" />
        
        <ParticleField mousePosition={mousePosition} />
        <LightStreaks />
      </Canvas>
    </div>
  );
};
