import { Fragment, useMemo } from "react";
import { SpriteMaterial, Vector3 } from "three";
import { Line, Sprite } from "./primitives";

export interface WebProps {
  length: number;
  items: SpriteMaterial[];
}

export const Web = function ({ length, items }: WebProps) {
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

  const points = useMemo(
    () => FibonacciSphere(new Vector3(0, 0, 0), length, items.length),
    [length, items],
  );

  return points.map((point, index) => (
    <Fragment key={index}>
      <Sprite scale={0.5} material={items[index]} position={point} />
      <Line points={[new Vector3(0, 0, 0), point]} />
    </Fragment>
  ));
};
