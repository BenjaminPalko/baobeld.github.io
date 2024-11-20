import { GroupProps } from "@react-three/fiber";
import { Fragment, useMemo, useState } from "react";
import { Texture, TextureLoader, Vector3 } from "three";
import { Line } from "./primitives";
import { Icon } from "../Icon";

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

interface ButtonProps {
  position: Vector3;
  texture: Texture;
  onClick: () => void;
}

const Button = function ({ position, texture, onClick }: ButtonProps) {
  const [hover, setHover] = useState(false);
  return (
    <sprite
      scale={hover ? 0.5 : 0.25}
      position={position}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      onClick={onClick}
    >
      <spriteMaterial map={texture} color={hover ? "green" : "white"} />
    </sprite>
  );
};

export interface WebProps extends GroupProps {
  length: number;
  menu: {
    iconPath: string;
    onClick: () => void;
  }[];
}

export const Web = function ({ length, menu }: WebProps) {
  const points = useMemo(
    () => FibonacciSphere(new Vector3(0, 0, 0), length, menu.length),
    [length, menu],
  );
  const textureLoader = useMemo(() => new TextureLoader(), []);

  return (
    <group>
      {menu.map((item, index) => (
        <Fragment key={index}>
          <Button
            position={points[index]}
            texture={textureLoader.load("./icons/button_round_line.svg")}
            onClick={item.onClick}
          />
          <Icon
            position={points[index].clone().add(new Vector3(0, -0.25, 0))}
            texturePath={item.iconPath}
          />
          <Line points={[new Vector3(0, 0, 0), points[index]]} />
        </Fragment>
      ))}
    </group>
  );
};
