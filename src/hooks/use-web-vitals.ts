import { useEffect, useState } from 'react';
import { onCLS, onFCP, onFID, onLCP, onTTFB } from 'web-vitals';

type MetricValue = {
  value: number;
  timestamp: number;
};

type MetricsStore = {
  CLS?: MetricValue;
  FCP?: MetricValue;
  FID?: MetricValue;
  LCP?: MetricValue;
  TTFB?: MetricValue;
};

export function useWebVitals() {
  const [metrics, setMetrics] = useState<MetricsStore>({});

  useEffect(() => {
    onCLS((metric) => setMetrics(prev => ({ ...prev, CLS: { value: metric.value, timestamp: Date.now() } })));
    onFID((metric) => setMetrics(prev => ({ ...prev, FID: { value: metric.value, timestamp: Date.now() } })));
    onLCP((metric) => setMetrics(prev => ({ ...prev, LCP: { value: metric.value, timestamp: Date.now() } })));
    onFCP((metric) => setMetrics(prev => ({ ...prev, FCP: { value: metric.value, timestamp: Date.now() } })));
    onTTFB((metric) => setMetrics(prev => ({ ...prev, TTFB: { value: metric.value, timestamp: Date.now() } })));
  }, []);

  return metrics;
} 