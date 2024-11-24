import { useFrame } from "@react-three/fiber";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { Texture, Vector3 } from "three";
import { Mathf } from "../../mathf";
import { MenuItem, MenuItemProps } from "./MenuItem";

export interface MenuItem {
  icon: Texture;
  label: Texture;
  onClick: () => void;
}

export interface MenuProps {
  items: MenuItem[];
  onSelected: (item: MenuItem) => void;
}

export const Menu = function ({ items, onSelected }: MenuProps) {
  const [loaded, setLoaded] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuItemProps[]>([]);
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null);
  const [points, setPoints] = useState<Vector3[]>([]);
  const spherePoints = useMemo(
    () => Mathf.FibonacciSphere(new Vector3(), 2.5, items.length),
    [items],
  );

  useEffect(() => {
    if (!loaded) {
      setLoaded(true);
      setMenuItems(
        items.map((item, index) => ({
          ...item,
          position: spherePoints[index],
          origin: new Vector3(),
          active: true,
          opacity: 1,
        })),
      );
    }
    return () => setLoaded(false);
  }, [loaded, items, spherePoints, setLoaded, setMenuItems]);

  document.addEventListener("keydown", (event) => {
    if (event.code === "Space" && activeItem) {
      onSelected(activeItem);
    }
  });

  useFrame((state, delta) => {
    if (!loaded) {
      return;
    }
    const cameraPosition = state.camera.position;
    let newActive: MenuItem | null = null;
    setMenuItems(
      items.map((item, index) => {
        const isClose = points[index].clone().sub(cameraPosition).length() < 3;
        if (isClose) {
          newActive = item;
        }

        const position = points[index].lerp(spherePoints[index], delta * 20);

        return {
          ...item,
          position: position,
          origin: new Vector3(),
          active: true,
          opacity: 1,
        };
      }),
    );
    setActiveItem(newActive);
  });

  return (
    <group>
      {menuItems.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </group>
  );
};
