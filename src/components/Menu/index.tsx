import { GroupProps } from "@react-three/fiber";
import { Fragment, useMemo } from "react";
import { Vector3 } from "three";
import { MenuNode } from "./MenuNode";

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

export interface MenuProps extends GroupProps {
  length: number;
  items: {
    iconPath: string;
    onClick: () => void;
  }[];
}

export const Menu = function ({ length, items: menu }: MenuProps) {
  const points = useMemo(
    () => FibonacciSphere(new Vector3(0, 0, 0), length, menu.length),
    [length, menu],
  );

  return (
    <group>
      {menu.map((item, index) => (
        <Fragment key={index}>
          <MenuNode
            origin={new Vector3(0, 0)}
            position={points[index]}
            textPath={item.iconPath}
            onClick={item.onClick}
          />
        </Fragment>
      ))}
    </group>
  );
};
