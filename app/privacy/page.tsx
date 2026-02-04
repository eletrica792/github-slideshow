import { Footer } from '../../components/Footer';

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <main className="container-base flex-1 py-16">
        <h1 className="text-3xl font-semibold text-slate-900">Política de Privacidade</h1>
        <p className="mt-4 text-sm text-slate-600">
          Coletamos apenas os dados enviados voluntariamente pelos formulários desta página. As informações
          são usadas para comunicação e envio de conteúdos relacionados à rotina de bem-estar.
        </p>
        <p className="mt-4 text-sm text-slate-600">
          Não vendemos suas informações e você pode solicitar a remoção a qualquer momento.
        </p>
      </main>
      <Footer />
    </div>
  );
}
