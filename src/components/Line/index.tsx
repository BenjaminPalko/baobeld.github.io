import { useEffect, useRef } from "react";
import { BufferGeometry, Vector3 } from "three";

export interface LineProps {
  points: Vector3[];
  opacity: number;
}

export const Line = function ({ points, opacity }: LineProps) {
  const ref = useRef<BufferGeometry>(null);

  useEffect(() => {
    ref.current?.setFromPoints(points);
  }, [points]);

  return (
    <line>
      <bufferGeometry ref={ref} />
      <lineBasicMaterial color={"white"} opacity={opacity} />
    </line>
  );
};
