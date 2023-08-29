"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

export default function FramerMotionHighlight({
  trigger,
}: {
  trigger: unknown;
}) {
  let controls = useAnimationControls();

  useEffect(() => {
    controls.start("highlight");
  }, [controls, trigger]);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        animate={controls}
        variants={{
          highlight: {
            scale: [null, 3, 3, 1],
            opacity: [null, 1, 0, 0],
            transitionEnd: {
              scale: 0,
            },
          },
        }}
        transition={{ times: [0, 0.2, 1, 1], duration: 1 }}
        className="aspect-square h-full rounded-full bg-green-500/50"
      />
    </div>
  );
}
