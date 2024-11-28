import { Canvas, useLoader } from "@react-three/fiber";
import { Menu, MenuProps, Modal } from "./components";
import { OrbitControls } from "@react-three/drei";
import { ReactNode, useState } from "react";
import { TextureLoader } from "three";

function App() {
  const [content, setContent] = useState<ReactNode>(null);

  const iconTexture = useLoader(TextureLoader, "./icons/button_round_line.svg");

  const menu: MenuProps["items"] = [
    {
      icon: iconTexture,
      label: useLoader(TextureLoader, "./text/about.svg"),
      onClick: () => setContent(<h1>ABOUT</h1>),
    },
    {
      icon: iconTexture,
      label: useLoader(TextureLoader, "./text/contact.svg"),
      onClick: () => setContent(<h1>CONTACT</h1>),
    },
    {
      icon: iconTexture,
      label: useLoader(TextureLoader, "./text/experience.svg"),
      onClick: () => setContent(<h1>EXPERIENCE</h1>),
    },
    {
      icon: iconTexture,
      label: useLoader(TextureLoader, "./text/projects.svg"),
      onClick: () => setContent(<h1>PROJECTS</h1>),
    },
    {
      icon: iconTexture,
      label: useLoader(TextureLoader, "./text/library.svg"),
      onClick: () => setContent(<h1>MY LIBRARY</h1>),
    },
  ];

  // const scene = useLoader(OBJLoader, "./scene.obj");

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Modal
        open={content !== null}
        onClose={() => {
          setContent(null);
        }}
        content={content}
      />
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Menu items={menu} size={2.5} />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={2 * (Math.PI / 8)}
          maxPolarAngle={6 * (Math.PI / 8)}
        />
      </Canvas>
    </div>
  );
}

export default App;
