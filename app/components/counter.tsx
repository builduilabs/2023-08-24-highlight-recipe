"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function Counter({ value }: { value: number }) {
  let v = useSpring(value, { mass: 0.8, stiffness: 75, damping: 15 });
  let display = useTransform(v, (current) =>
    Math.round(current).toLocaleString(),
  );

  useEffect(() => {
    v.set(value);
  }, [v, value]);

  return <motion.span>{display}</motion.span>;
}
