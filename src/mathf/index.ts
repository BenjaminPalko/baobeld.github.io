import { Vector3 } from "three";

export const Mathf = {
  Lerp(v0: number, v1: number, t: number) {
    return (1 - t) * v0 + t * v1;
  },
  FibonacciSphere(center: Vector3, length: number, count: number) {
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
  },
};
