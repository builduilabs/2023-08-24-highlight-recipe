"use client";

import { ComponentPropsWithoutRef, useEffect, useState } from "react";

type HighlightProps = ComponentPropsWithoutRef<"div"> & {
  trigger: unknown;
  duration: number;
};

export default function Highlight({
  trigger,
  duration,
  children,
  ...props
}: HighlightProps) {
  let [previous, setPrevious] = useState(trigger);
  let [didHighlight, setDidHighlight] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (previous !== trigger) {
        setDidHighlight(true);
      }
      setPrevious(trigger);
    }, duration);

    return () => {
      clearTimeout(handler);
    };
  }, [duration, previous, trigger]);

  return (
    <div
      data-highlight={previous !== trigger ? "on" : didHighlight ? "off" : null}
      {...props}
    >
      {children}
    </div>
  );
}
