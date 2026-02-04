import { Footer } from '../../components/Footer';

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <main className="container-base flex-1 py-16">
        <h1 className="text-3xl font-semibold text-slate-900">Termos de Uso</h1>
        <p className="mt-4 text-sm text-slate-600">
          Este site tem caráter informativo e não substitui orientação profissional. O conteúdo é voltado para
          bem-estar e hábitos de rotina.
        </p>
        <p className="mt-4 text-sm text-slate-600">
          Ao utilizar esta página, você concorda que os resultados podem variar e que nenhuma promessa de
          cura é feita.
        </p>
      </main>
      <Footer />
    </div>
  );
}
