'use client';

type TrackingEvent = {
  event: 'cta_click' | 'lead_submit';
  product_name: string;
  placement?: string;
  timestamp: string;
};

declare global {
  interface Window {
    dataLayer?: TrackingEvent[];
  }
}

export const trackEvent = (payload: Omit<TrackingEvent, 'timestamp'>) => {
  if (typeof window === 'undefined') return;

  const event = {
    ...payload,
    timestamp: new Date().toISOString(),
  } satisfies TrackingEvent;

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(event);
};
