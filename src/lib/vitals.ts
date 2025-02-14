import { CLSMetric, FCPMetric, FIDMetric, LCPMetric, TTFBMetric } from 'web-vitals';

type MetricType = CLSMetric | FCPMetric | FIDMetric | LCPMetric | TTFBMetric;

export function reportWebVitals(metric: MetricType) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(metric);
  }

  // Send to your analytics service
  const body = {
    id: metric.id,
    name: metric.name,
    value: metric.value,
    rating: metric.rating, // 'good' | 'needs-improvement' | 'poor'
    delta: metric.delta,
    navigationType: metric.navigationType
  };

  // You can send this to your analytics service
  // For now, we'll just log it to the console in production
  if (process.env.NODE_ENV === 'production') {
    // Example: Send to endpoint
    // fetch('/api/vitals', {
    //   body: JSON.stringify(body),
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' }
    // });
    
    // For now, just log to console
    console.info('Web Vitals:', body);
  }
} 