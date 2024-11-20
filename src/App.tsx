import { Canvas } from "@react-three/fiber";
import { Web } from "./components";
import { OrbitControls } from "@react-three/drei";
import { useMemo } from "react";
import { SpriteMaterial, TextureLoader } from "three";

function App() {
  const sprites = useMemo(() => {
    const textureLoader = new TextureLoader();
    const material = new SpriteMaterial({
      map: textureLoader.load("./moon_full.png"),
    });
    return [material, material, material, material];
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        {/* <SampleBox /> */}
        <Web length={2} items={sprites} />
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  );
}

export default App;
