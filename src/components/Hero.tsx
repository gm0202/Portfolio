import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/web';
import * as THREE from 'three';
import myPhoto from '../Assets/WhatsApp Image 2025-05-29 at 16.45.25_a75f613d.jpg';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      customSphereMaterial: any; // Updated the type name
    }
  }
}

// Define the custom shader material as a class
class CustomSphereMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        time: { value: 0.0 },
        color: { value: new THREE.Color('#64ffda') },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        void main() {
          vUv = uv;
          vNormal = normal;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 color;
        varying vec2 vUv;
        varying vec3 vNormal;
        void main() {
          vec3 light = vec3(0.5, 0.2, 1.0);
          light = normalize(light);
          float dProd = dot(vNormal, light) * 0.5 + 0.5;
          
          vec3 ambient = vec3(0.1);
          vec3 diffuse = color * dProd;
          
          vec3 finalColor = ambient + diffuse;
          
          // Add a time-based distortion effect on color
          float distortion = sin(vUv.x * 10.0 + time * 2.0) * 0.1 + sin(vUv.y * 10.0 + time * 2.5) * 0.1;
          finalColor += vec3(distortion);
          
          gl_FragColor = vec4(finalColor, 0.5); // Use opacity from the material
        }
      `,
      transparent: true,
      opacity: 0.5,
    });
  }
}

// Extend react-three/fiber with the custom material class
extend({ CustomSphereMaterial });

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<CustomSphereMaterial>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      // meshRef.current.scale.setScalar(1 + Math.sin(Date.now() * 0.001) * 0.05); // Keep subtle scale or remove?
    }
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = clock.getElapsedTime();
    }
  });

  return (
    <Sphere args={[1, 100, 200]} ref={meshRef}>
      {/* Use the custom shader material */}
      <customSphereMaterial ref={materialRef} /> {/* Use the registered class name */}
    </Sphere>
  );
};

const Hero = () => {
  const springProps = useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    delay: 200,
  });

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="text-center relative overflow-hidden rounded-lg p-8 mr-10"
          style={{
            backgroundImage: `url(${myPhoto})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-primary opacity-70"></div>
          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-secondary mb-4"
            >
              Hi, my name is
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              Gaurang Mishra
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-bold text-textSecondary mb-8"
            >
              I build things for the web and beyond.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-textSecondary max-w-2xl mx-auto mb-8"
            >
              I'm a Computer Science undergraduate specializing in Software Engineering,
              passionate about AI, web development, and cybersecurity.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <a
                href="#projects"
                className="inline-block px-8 py-3 border-2 border-secondary text-secondary rounded hover:bg-secondary/10 transition-colors duration-300"
              >
                View My Work
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 