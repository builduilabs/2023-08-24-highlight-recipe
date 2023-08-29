"use client";

import { ReactNode, useEffect, useState } from "react";

export default function Highlight({
  children,
  trigger,
  duration,
  className,
}: {
  children: ReactNode;
  trigger: unknown;
  duration: number;
  className: string;
}) {
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
      className={className}
    >
      {children}
    </div>
  );
}
