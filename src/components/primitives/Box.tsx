import {
  BoxGeometryProps,
  MeshProps,
  MeshStandardMaterialProps,
} from "@react-three/fiber";

export type BoxProps = {
  mesh?: MeshProps;
  geometry?: BoxGeometryProps;
  material?: MeshStandardMaterialProps;
};

export const Box = function (props: BoxProps) {
  return (
    <mesh {...props.mesh}>
      <boxGeometry {...props.geometry} />
      <meshStandardMaterial {...props.material} />
    </mesh>
  );
};
