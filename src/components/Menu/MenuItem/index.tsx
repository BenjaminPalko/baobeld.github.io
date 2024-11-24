import { useEffect, useRef } from "react";
import { BufferGeometry, Texture, Vector3 } from "three";

export interface MenuItemProps {
  icon: Texture;
  label: Texture;
  onClick: () => void;
  origin: Vector3;
  position: Vector3;
  active: boolean;
}

export const MenuItem = function (item: MenuItemProps) {
  const ref = useRef<BufferGeometry>(null);

  useEffect(() => {
    ref.current?.setFromPoints([item.origin, item.position]);
  }, [item]);

  return (
    <>
      <group position={item.position}>
        <sprite scale={item.active ? 0.45 : 0.3}>
          <spriteMaterial
            map={item.icon}
            color={item.active ? "green" : "white"}
          />
        </sprite>
        <sprite scale={new Vector3(0.4, 0.25)} position={new Vector3(0, -0.35)}>
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
