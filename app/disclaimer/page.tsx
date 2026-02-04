import { Footer } from '../../components/Footer';
import { PRODUCT_NAME } from '../../lib/config';

export default function DisclaimerPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <main className="container-base flex-1 py-16">
        <h1 className="text-3xl font-semibold text-slate-900">Transparência e Avisos</h1>
        <p className="mt-4 text-sm text-slate-600">
          Este site é uma página informativa sobre {PRODUCT_NAME}. Não somos a página oficial do fabricante,
          mas direcionamos para a oferta oficial quando você decide continuar.
        </p>
        <p className="mt-4 text-sm text-slate-600">
          Suplemento alimentar. Resultados podem variar. Consulte um profissional de saúde.
        </p>
        <p className="mt-4 text-sm text-slate-600">
          Não fazemos promessas de cura ou garantias de resultados. O conteúdo serve apenas como apoio
          informativo para sua rotina.
        </p>
      </main>
      <Footer />
    </div>
  );
}
