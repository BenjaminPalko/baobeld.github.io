import { Canvas, useLoader } from "@react-three/fiber";
import { Menu, MenuProps, Modal } from "./components";
import { OrbitControls, useFBX } from "@react-three/drei";
import { ReactNode, useState } from "react";
import { Vector3 } from "three";
import { OBJLoader } from "three/examples/jsm/Addons.js";

function App() {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<ReactNode>(null);

  const menu: MenuProps["items"] = [
    {
      iconPath: "./text/about.svg",
      onClick: () => {
        setOpen(true);
        setContent(<h1>ABOUT</h1>);
      },
    },
    {
      iconPath: "./text/contact.svg",
      onClick: () => {
        setOpen(true);
        setContent(<h1>CONTACT</h1>);
      },
    },
    {
      iconPath: "./text/experience.svg",
      onClick: () => {
        setOpen(true);
        setContent(<h1>EXPERIENCE</h1>);
      },
    },
    {
      iconPath: "./text/projects.svg",
      onClick: () => {
        setOpen(true);
        setContent(<h1>PROJECTS</h1>);
      },
    },
    {
      iconPath: "./text/library.svg",
      onClick: () => {
        setOpen(true);
        setContent(<h1>MY LIBRARY</h1>);
      },
    },
  ];

  const scene = useLoader(OBJLoader, "./scene.obj");
  useFBX("./scene.obj");

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
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
        <Menu length={2.5} items={menu} />
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
