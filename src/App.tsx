import { Canvas } from "@react-three/fiber";
import { Web, WebProps } from "./components";
import { OrbitControls } from "@react-three/drei";
import { ReactNode, useState } from "react";
import { Modal } from "./components/Modal";

function App() {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<ReactNode>(null);

  const menu: WebProps["menu"] = [
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
        <Web length={2} menu={menu} />
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  );
}

export default App;
