'use client';

import { CTAButton } from './CTAButton';

export const StickyMobileCta = () => (
  <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-slate-200 bg-white/95 p-3 shadow-soft md:hidden">
    <div className="mx-auto flex w-full max-w-4xl items-center justify-center">
      <CTAButton placement="sticky_mobile" className="w-full justify-center" />
    </div>
  </div>
);
