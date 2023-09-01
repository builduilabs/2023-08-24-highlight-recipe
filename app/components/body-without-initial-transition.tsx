"use client";

import { ReactNode, useEffect, useState } from "react";

export default function BodyWithoutInitialTransition({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  let [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <body className={`${hasMounted ? "" : "no-transition"} ${className}`}>
      {children}
    </body>
  );
}
