import { Canvas, useLoader } from "@react-three/fiber";
import { Menu, MenuProps, Modal } from "./components";
import { OrbitControls } from "@react-three/drei";
import { ReactNode, useState } from "react";
import { TextureLoader, Vector3 } from "three";
import { OBJLoader } from "three/examples/jsm/Addons.js";

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

  const scene = useLoader(OBJLoader, "./scene.obj");

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Modal
        open={content !== null}
        onClose={() => {
          setContent(null);
        }}
        content={content}
      />
      <Canvas style={{ cursor: 'url("./cursors/resize_c_cross.png")' }}>
        <object3D position={new Vector3(0, 3, 0)} scale={new Vector3(6, 1, 6)}>
          <primitive object={scene.clone()} />
        </object3D>
        <object3D position={new Vector3(0, -3, 0)} scale={new Vector3(6, 1, 6)}>
          <primitive object={scene.clone()} />
        </object3D>
        <ambientLight intensity={Math.PI / 2} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Menu items={menu} />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={3 * (Math.PI / 8)}
          maxPolarAngle={5 * (Math.PI / 8)}
        />
      </Canvas>
    </div>
  );
}

export default App;
