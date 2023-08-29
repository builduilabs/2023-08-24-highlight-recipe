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
  let isHighlighted = previous !== trigger;

  useEffect(() => {
    const handler = setTimeout(() => {
      setPrevious(trigger);
    }, duration);

    return () => {
      clearTimeout(handler);
    };
  }, [duration, trigger]);

  return (
    <div data-highlight={isHighlighted || null} className={className}>
      {children}
    </div>
  );
}
