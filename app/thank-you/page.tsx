import Link from 'next/link';
import { CTAButton } from '../../components/CTAButton';
import { Footer } from '../../components/Footer';
import { PRODUCT_NAME } from '../../lib/config';

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <main className="flex flex-1 items-center">
        <div className="container-base py-20">
          <div className="rounded-3xl bg-white p-10 shadow-soft">
            <p className="text-sm uppercase tracking-wide text-emerald-600">Cadastro concluído</p>
            <h1 className="mt-4 text-3xl font-semibold text-slate-900">
              Obrigado por confiar na sua jornada de bem-estar.
            </h1>
            <p className="mt-4 text-base text-slate-600">
              Em breve você receberá mais informações sobre {PRODUCT_NAME}. Se preferir, já pode seguir para a
              oferta oficial.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CTAButton placement="thank_you" label="Continuar para a oferta oficial" />
              <Link
                href="/"
                className="rounded-full border border-slate-200 px-6 py-3 text-center text-sm font-semibold text-slate-700"
              >
                Voltar para a página inicial
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
