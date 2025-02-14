"use client";

import { useWebVitals } from "@/hooks/use-web-vitals";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  // Initialize web vitals tracking
  useWebVitals();

  return <>{children}</>;
} 