import { useFrame } from "@react-three/fiber";
import { ReactNode, useMemo, useState } from "react";
import { Texture, Vector3 } from "three";
import { MenuItem } from "./MenuItem";

function FibonacciSphere(center: Vector3, length: number, count: number) {
  const points: Vector3[] = [];
  const goldenAngle = Math.PI * (Math.sqrt(5) - 1);

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const radius = Math.sqrt(1 - y * y);

    const theta = goldenAngle * i;

    const x = Math.cos(theta) * radius;
    const z = Math.sin(theta) * radius;
    const point = new Vector3(y, x, z);
    point.multiplyScalar(length);
    point.add(center);
    points.push(point);
  }
  return points;
}

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
  const points = useMemo(
    () => FibonacciSphere(new Vector3(), 2.5, items.length),
    [items],
  );

  useFrame((state, delta) => {
    const cameraPosition = state.camera.position;
    setMenuItems(
      items.map((item, index) => (
        <MenuItem
          key={index}
          {...item}
          position={points[index]}
          origin={new Vector3()}
          active={points[index].clone().sub(cameraPosition).length() < 3}
        />
      )),
    );
  });

  return <group>{menuItems}</group>;
};
