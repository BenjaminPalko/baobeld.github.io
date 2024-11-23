import { useEffect, useRef } from "react";
import { BufferGeometry, Vector3 } from "three";

export interface LineProps {
  points: Vector3[];
}

export const Line = function ({ points }: LineProps) {
  const ref = useRef<BufferGeometry>(null);

  useEffect(() => {
    ref.current?.setFromPoints(points);
  }, [ref, points]);

  return (
    <line>
      <bufferGeometry ref={ref} />
      <lineBasicMaterial color={"white"} />
    </line>
  );
};
