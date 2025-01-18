import { getCLS, getFID, getLCP } from 'web-vitals';

export function reportWebVitals(metric: any) {
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

    if (metric.name === 'CLS') {
      options.extra = {
        ...options.extra,
        layout_shifts: metric.entries.map((entry: any) => ({
          value: entry.value,
          sources: entry.sources,
        })),
      };
    }

    // Send to Sentry
    if (window.Sentry) {
      window.Sentry.captureMessage(`Web Vital: ${metric.name}`, {
        level: metric.rating === 'poor' ? 'warning' : 'info',
        ...options,
      });
    }
  }
}

export function initWebVitals() {
  getCLS(reportWebVitals);
  getFID(reportWebVitals);
  getLCP(reportWebVitals);
}
