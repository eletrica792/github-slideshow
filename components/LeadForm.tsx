'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { trackEvent } from '../lib/tracking';
import { PRODUCT_NAME } from '../lib/config';

export const LeadForm = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      whatsapp: String(formData.get('whatsapp') ?? ''),
      product: PRODUCT_NAME,
    };

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Falha ao enviar seus dados.');
      }

      trackEvent({ event: 'lead_submit', product_name: PRODUCT_NAME });
      router.push('/thank-you');
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'Erro inesperado.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 grid gap-4 rounded-3xl bg-white p-6 shadow-soft"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-700" htmlFor="name">
            Nome
          </label>
          <input
            id="name"
            name="name"
            required
            className="rounded-xl border border-slate-200 px-4 py-3 text-sm"
            placeholder="Seu nome"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-700" htmlFor="email">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="rounded-xl border border-slate-200 px-4 py-3 text-sm"
            placeholder="voce@email.com"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-slate-700" htmlFor="whatsapp">
          WhatsApp (opcional)
        </label>
        <input
          id="whatsapp"
          name="whatsapp"
          className="rounded-xl border border-slate-200 px-4 py-3 text-sm"
          placeholder="(00) 00000-0000"
        />
      </div>
      {error ? <p className="text-sm text-rose-600">{error}</p> : null}
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? 'Enviando...' : 'Quero receber mais detalhes'}
      </button>
    </form>
  );
};
