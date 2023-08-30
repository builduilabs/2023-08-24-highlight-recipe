"use client";

import {
  ComponentPropsWithoutRef,
  ReactNode,
  useEffect,
  useState,
} from "react";

export default function Highlight({
  children,
  trigger,
  duration,
  ...props
}: {
  children: ReactNode;
  trigger: unknown;
  duration: number;
} & ComponentPropsWithoutRef<"div">) {
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
