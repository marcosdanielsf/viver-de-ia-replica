"use client";

import { useState, useEffect, type ReactNode } from "react";

export function ClientOnly({ children, fallback }: { children: ReactNode; fallback?: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      fallback ?? (
        <div className="flex items-center justify-center h-full min-h-[200px] text-[var(--text-muted)] text-sm animate-pulse">
          Carregando...
        </div>
      )
    );
  }

  return <>{children}</>;
}
