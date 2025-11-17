"use client";

import { usePathname } from "next/navigation";
import { Header } from "..";

export function HeaderWrapper() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return <Header variant={isHome ? "absolute" : "default"} />;
}
