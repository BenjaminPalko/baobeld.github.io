import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { BufferGeometry, Texture, Vector3 } from "three";
import { Mathf } from "../../../mathf";

export interface MenuItemProps {
  icon: Texture;
  label: Texture;
  origin: Vector3;
  position: Vector3;
  active: boolean;
  opacity: number;
}

export const MenuItem = function (item: MenuItemProps) {
  const ref = useRef<BufferGeometry>(null);

  useEffect(() => {
    ref.current?.setFromPoints([item.origin, item.position]);
  }, [item]);

  const [scale, setScale] = useState(0.15);

  useFrame((state, delta) => {
    if (item.active) {
      setScale((current) => Mathf.Lerp(current, 0.45, delta * 20));
    } else {
      setScale((current) => Mathf.Lerp(current, 0.15, delta * 20));
    }
  });

  return (
    <>
      <group position={item.position}>
        <sprite scale={scale}>
          <spriteMaterial
            map={item.icon}
            color={"white"}
            opacity={item.opacity}
          />
        </sprite>
        <sprite
          scale={new Vector3(item.label.image.width, item.label.image.height)
            .normalize()
            .multiplyScalar(1)}
          position={new Vector3(0, -0.35)}
        >
          <spriteMaterial map={item.label} />
        </sprite>
      </group>
      <line>
        <bufferGeometry ref={ref} />
        <lineBasicMaterial color={"white"} />
      </line>
    </>
  );
};
