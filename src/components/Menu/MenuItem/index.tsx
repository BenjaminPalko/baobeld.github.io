import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Group, Texture, Vector3 } from "three";
import { Mathf } from "../../../mathf";
import { Line } from "../../Line";

export interface MenuItemProps {
  icon: Texture;
  label: Texture;
  origin: Vector3;
  position: Vector3;
  active: boolean;
}

export const MenuItem = function (item: MenuItemProps) {
  const [scale, setScale] = useState(0.15);

  const ref = useRef<Group>(null);
  const [opacity, setOpacity] = useState(0);

  useFrame((state, delta) => {
    if (item.active) {
      setScale((current) => Mathf.Lerp(current, 0.45, delta * 20));
    } else {
      setScale((current) => Mathf.Lerp(current, 0.15, delta * 20));
    }
    if (ref.current?.position) {
      ref.current.position.lerp(item.position, delta * 2);
      setOpacity(ref.current.position.length() / item.position.length());
    }
  });

  return (
    <>
      <Line
        points={[item.origin, ref.current?.position ?? new Vector3()]}
        opacity={opacity}
      />
      <group ref={ref}>
        <sprite scale={scale}>
          <spriteMaterial map={item.icon} color={"white"} opacity={opacity} />
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
    </>
  );
};
