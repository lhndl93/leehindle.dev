"use client";

import { useWebVitals } from "@/hooks/use-web-vitals";
import { Info } from "lucide-react";

const metricDescriptions = {
  LCP: "Largest Contentful Paint measures when the main content of a page is loaded. Faster LCP helps users know the page is useful.",
  FID: "First Input Delay measures the time from when a user first interacts with your site to when the browser responds. Lower is better for interactivity.",
  CLS: "Cumulative Layout Shift measures visual stability. A low score means elements don't move around unexpectedly.",
  FCP: "First Contentful Paint marks when the first text or image is painted. Quick FCP helps users know the site is loading.",
  TTFB: "Time to First Byte measures how long it takes for the server to respond. Fast TTFB indicates good server performance."
} as const;

function MetricCard({ 
  label, 
  metricKey,
  metric, 
  target, 
  unit = "ms",
}: { 
  label: string;
  metricKey: keyof typeof metricDescriptions;
  metric?: { value: number; timestamp: number }; 
  target: number;
  unit?: string;
}) {
  if (!metric?.value) return null;

  const isGood = metric.value <= target;
  const needsImprovement = metric.value > target && metric.value <= target * 1.5;

  return (
    <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-3 ring-1 ring-inset ring-zinc-800 group relative">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5">
            <span className="text-sm text-zinc-300">{label}</span>
            <div className="relative">
              <Info className="w-4 h-4 text-zinc-500 cursor-help" />
              <div className="absolute left-1/2 -translate-x-1/2 top-6 w-64 p-3 bg-zinc-900/95 rounded-lg text-xs text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity shadow-xl z-[60] pointer-events-none">
                {metricDescriptions[metricKey]}
                <div className="mt-2 pt-2 border-t border-zinc-800">
                  <div className="flex justify-between text-zinc-500">
                    <span>Target:</span>
                    <span>≤ {target}{unit}</span>
                  </div>
                  <div className="mt-1 flex justify-between text-zinc-500">
                    <span>Measured at:</span>
                    <span>{new Date(metric.timestamp).toLocaleTimeString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-semibold text-zinc-200">
              {metric.value.toFixed(1)}
            </span>
            <span className="text-sm text-zinc-400">{unit}</span>
          </div>
        </div>
        <span className={`px-2 py-1 text-xs rounded-full ${
          isGood 
            ? "bg-green-400/10 text-green-400 ring-1 ring-inset ring-green-400/20"
            : needsImprovement
            ? "bg-yellow-400/10 text-yellow-400 ring-1 ring-inset ring-yellow-400/20"
            : "bg-red-400/10 text-red-400 ring-1 ring-inset ring-red-400/20"
        }`}>
          {isGood ? "Good" : needsImprovement ? "Needs Improvement" : "Poor"}
        </span>
      </div>
    </div>
  );
}

export function PerformanceMetrics() {
  const metrics = useWebVitals();

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-zinc-200">Performance Metrics</h3>
      <div className="grid grid-cols-1 gap-3">
        <MetricCard 
          label="LCP" 
          metricKey="LCP"
          metric={metrics.LCP} 
          target={2500}
        />
        <MetricCard 
          label="FID" 
          metricKey="FID"
          metric={metrics.FID} 
          target={100}
        />
        <MetricCard 
          label="CLS" 
          metricKey="CLS"
          metric={metrics.CLS} 
          target={0.1}
          unit=""
        />
        <MetricCard 
          label="FCP" 
          metricKey="FCP"
          metric={metrics.FCP} 
          target={1800}
        />
        <MetricCard 
          label="TTFB" 
          metricKey="TTFB"
          metric={metrics.TTFB} 
          target={800}
        />
      </div>
    </div>
  );
} 