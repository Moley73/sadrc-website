import { Metric } from 'web-vitals';
import * as webVitals from 'web-vitals';

export function reportWebVitals(metric: Metric) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(metric);
  }

  // Send to Sentry in production
  if (process.env.NODE_ENV === 'production') {
    const options = {
      tags: {
        metric: metric.name,
      },
      extra: {
        value: metric.value,
        rating: metric.rating,
      },
    };

    // Report different metrics to Sentry
    switch (metric.name) {
      case 'CLS':
        console.log('CLS:', metric.value);
        break;
      case 'FID':
        console.log('FID:', metric.value);
        break;
      case 'LCP':
        console.log('LCP:', metric.value);
        break;
      default:
        break;
    }
  }
}

export function initWebVitals() {
  webVitals.onCLS(reportWebVitals);
  webVitals.onFID(reportWebVitals);
  webVitals.onLCP(reportWebVitals);
}
