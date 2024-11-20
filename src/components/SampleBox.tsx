import { useRef } from "react";
import { Mesh } from "three";
import { Box } from "./primitives";

export const SampleBox = function () {
  const ref = useRef<Mesh>(null!);
  return (
    <Box
      mesh={{
        ref: ref,
        scale: 1,
      }}
      geometry={{ args: [1, 1, 1] }}
      material={{ color: "grey" }}
    />
  );
};
