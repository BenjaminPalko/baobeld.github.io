import { Canvas } from "@react-three/fiber";
import { Web, WebProps } from "./components";
import { OrbitControls } from "@react-three/drei";
const menu: WebProps["menu"] = [
  {
    iconPath: "./text/about.svg",
    onClick: () => console.log("about"),
  },
  {
    iconPath: "./text/contact.svg",
    onClick: () => console.log("contact"),
  },
  {
    iconPath: "./text/experience.svg",
    onClick: () => console.log("experience"),
  },
  {
    iconPath: "./text/projects.svg",
    onClick: () => console.log("projects"),
  },
];

function App() {
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
        <Web length={2} menu={menu} />
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  );
}

export default App;
