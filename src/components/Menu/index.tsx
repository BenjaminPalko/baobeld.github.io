import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useState } from "react";
import { Texture, Vector3 } from "three";
import { Mathf } from "../../mathf";
import { MenuItem } from "./MenuItem";

export interface MenuProps {
  items: {
    icon: Texture;
    label: Texture;
    onClick: () => void;
  }[];
  size: number;
}

export const Menu = function ({ items, size }: MenuProps) {
  const spherePoints = useMemo(
    () => Mathf.FibonacciSphere(new Vector3(), size, items.length),
    [items, size],
  );
  const [loaded, setLoaded] = useState(false);
  const [points, setPoints] = useState<Vector3[]>([]);
  const [activeItem, setActiveItem] = useState<number>(-1);

  function onKeyDown(event: KeyboardEvent) {
    if (event.code === "Space" && activeItem !== -1) {
      const zero = new Vector3(0, 0, 0);
      setPoints(new Array(items.length).fill(zero));
    }
  }

  useEffect(() => {
    if (!loaded) {
      setPoints(spherePoints);
      setLoaded(true);
      document.addEventListener("keydown", onKeyDown);
    }
    return () => {
      setLoaded(false);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [loaded, items, spherePoints, setLoaded]);

  useFrame((state, delta) => {
    const cameraPosition = state.camera.position;
    setActiveItem(
      points.reduce((prev, current, index) => {
        if (cameraPosition.clone().sub(current).length() < 3) {
          return index;
        }
        return prev;
      }, -1),
    );
  });

  return (
    <group>
      {items.map((item, index) => (
        <MenuItem
          key={JSON.stringify(points[index])}
          origin={new Vector3(0, 0, 0)}
          position={points[index]}
          active={activeItem === index}
          opacity={1}
          icon={item.icon}
          label={item.label}
        />
      ))}
    </group>
  );
};
