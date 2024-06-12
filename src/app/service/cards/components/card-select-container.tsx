"use client";

import { useState } from "react";

function CardSelectContainer({ children }: { children: React.ReactNode }) {
  const [selected, setSelected] = useState<string | null>(null);

  return <>{children}</>;
}

export { CardSelectContainer };
