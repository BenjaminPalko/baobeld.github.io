import { useMemo, useState } from "react";
import { TextureLoader, Vector3 } from "three";

export interface IconProps {
  position: Vector3;
  texturePath: string;
}

export const Icon = function ({ position, texturePath }: IconProps) {
  const [scale, setScale] = useState(new Vector3(1, 1));
  const texture = useMemo(
    () =>
      new TextureLoader().load(texturePath, (data) =>
        setScale(
          new Vector3(data.image.width, data.image.height)
            .normalize()
            .multiplyScalar(0.75),
        ),
      ),
    [texturePath],
  );

  return (
    <sprite scale={scale} position={position}>
      <spriteMaterial map={texture} />
    </sprite>
  );
};
