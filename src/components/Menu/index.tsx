import { useFrame } from "@react-three/fiber";
import { ReactNode, useMemo, useState } from "react";
import { Texture, Vector3 } from "three";
import { Mathf } from "../../mathf";
import { MenuItem } from "./MenuItem";

export interface MenuItem {
  icon: Texture;
  label: Texture;
  onClick: () => void;
}

export interface MenuProps {
  items: MenuItem[];
}

export const Menu = function ({ items }: MenuProps) {
  const [menuItems, setMenuItems] = useState<ReactNode[]>([]);
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null);
  const points = useMemo(
    () => Mathf.FibonacciSphere(new Vector3(), 2.5, items.length),
    [items],
  );

  document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
      activeItem?.onClick();
    }
  });

  useFrame((state) => {
    const cameraPosition = state.camera.position;
    let newActive: MenuItem | null = null;
    setMenuItems(
      items.map((item, index) => {
        const isClose = points[index].clone().sub(cameraPosition).length() < 3;
        if (isClose) {
          newActive = item;
        }
        return (
          <MenuItem
            key={index}
            {...item}
            position={points[index]}
            origin={new Vector3()}
            active={isClose}
          />
        );
      }),
    );
    setActiveItem(newActive);
  });

  return <group>{menuItems}</group>;
};
