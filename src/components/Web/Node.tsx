import { useMemo, useState } from "react";
import { Vector3, TextureLoader } from "three";
import { Line } from "./Line";

interface NodeProps {
  origin: Vector3;
  position: Vector3;
  textPath: string;
  onClick: () => void;
}

export const Node = function ({
  origin,
  position,
  textPath,
  onClick,
}: NodeProps) {
  const textureLoader = useMemo(() => new TextureLoader(), []);
  const [hover, setHover] = useState(false);
  const [scale, setScale] = useState(new Vector3(1, 1));
  const texture = useMemo(
    () =>
      new TextureLoader().load(textPath, (data) =>
        setScale(
          new Vector3(data.image.width, data.image.height)
            .normalize()
            .multiplyScalar(0.75),
        ),
      ),
    [textPath],
  );
  return (
    <>
      <sprite
        scale={hover ? 0.5 : 0.25}
        position={position}
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
        onClick={onClick}
      >
        <spriteMaterial
          map={textureLoader.load("./icons/button_round_line.svg")}
          color={hover ? "green" : "white"}
        />
      </sprite>
      {hover && (
        <sprite scale={0.35} position={position}>
          <spriteMaterial
            map={textureLoader.load("./icons/tile_0111.png")}
            color={"white"}
          />
        </sprite>
      )}
      <sprite
        scale={scale}
        position={position.clone().add(new Vector3(0, -0.25, 0))}
      >
        <spriteMaterial map={texture} />
      </sprite>
      <Line points={[origin, position]} />
    </>
  );
};
