'use client';

import { PRIMARY_CTA, PRODUCT_NAME, OUTBOUND_URL } from '../lib/config';
import { trackEvent } from '../lib/tracking';

type CTAButtonProps = {
  label?: string;
  placement: string;
  className?: string;
};

export const CTAButton = ({ label = PRIMARY_CTA, placement, className }: CTAButtonProps) => {
  const handleClick = () => {
    trackEvent({ event: 'cta_click', product_name: PRODUCT_NAME, placement });
    window.open(OUTBOUND_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-slate-800 ${className ?? ''}`}
    >
      {label}
    </button>
  );
};
