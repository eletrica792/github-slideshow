import Link from 'next/link';
import { CTAButton } from '../components/CTAButton';
import { LeadForm } from '../components/LeadForm';
import { StickyMobileCta } from '../components/StickyMobileCta';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { Footer } from '../components/Footer';
import { PRODUCT_NAME, NICHE, PRIMARY_CTA } from '../lib/config';

const benefits = [
  {
    title: 'Apoio diário ao bem-estar bucal',
    description:
      'Uma rotina consistente pode ajudar a manter o equilíbrio natural da sua saúde oral.',
  },
  {
    title: 'Complemento para hábitos de higiene',
    description:
      'Pode apoiar quem já escova e usa fio dental, reforçando sua atenção diária.',
  },
  {
    title: 'Conforto na sua rotina',
    description:
      'Fácil de incluir no dia a dia, sem grandes mudanças no seu planejamento.',
  },
  {
    title: 'Foco em bem-estar',
    description:
      'Ajuda a manter uma sensação de frescor e cuidado contínuo.',
  },
  {
    title: 'Escolha consciente',
    description:
      'Indicado para quem busca apoiar a saúde bucal com decisões mais informadas.',
  },
];

const faqs = [
  {
    question: `${PRODUCT_NAME} é um medicamento?`,
    answer:
      'Não. Trata-se de um suplemento alimentar que pode apoiar a rotina de bem-estar.',
  },
  {
    question: 'Em quanto tempo vejo diferenças?',
    answer:
      'Cada organismo responde de forma única. O ideal é manter uma rotina consistente.',
  },
  {
    question: 'Posso usar junto com minha higiene tradicional?',
    answer:
      'Sim. Ele foi pensado para complementar hábitos como escovação e uso do fio dental.',
  },
  {
    question: 'Preciso de orientação profissional?',
    answer:
      'Sempre que possível, é recomendado consultar um profissional de saúde.',
  },
  {
    question: 'Existe garantia ou resultado certo?',
    answer:
      'Não. Resultados podem variar conforme hábitos, histórico e frequência de uso.',
  },
  {
    question: 'Como faço para comprar?',
    answer:
      'Você pode acessar a página oficial e conferir as condições diretamente.',
  },
  {
    question: 'É seguro para qualquer pessoa?',
    answer:
      'Cada pessoa tem necessidades próprias. Avalie com um profissional se tiver dúvidas.',
  },
  {
    question: 'O produto substitui consultas odontológicas?',
    answer:
      'Não. Ele é um apoio e não substitui avaliações com especialistas.',
  },
];

export default function HomePage() {
  return (
    <div className="bg-slate-50">
      <StickyMobileCta />
      <main className="pb-24">
        <section className="border-b border-slate-200 bg-white">
          <div className="container-base grid gap-12 py-16 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                {NICHE}
              </span>
              <h1 className="text-3xl font-semibold text-slate-900 md:text-5xl">
                Apoie sua rotina de higiene bucal com uma escolha mais completa.
              </h1>
              <p className="text-base text-slate-600 md:text-lg">
                {PRODUCT_NAME} foi pensado para quem busca um suporte diário que pode ajudar no equilíbrio do
                bem-estar oral, sem prometer resultados absolutos.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <CTAButton placement="hero" />
                <Link
                  href="#lead"
                  className="text-sm font-semibold text-slate-700 underline-offset-4 hover:underline"
                >
                  Quero receber novidades
                </Link>
              </div>
              <p className="text-xs text-slate-500">
                Suplemento alimentar. Resultados podem variar. Consulte um profissional de saúde.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-100 p-8 shadow-soft">
              <p className="text-sm uppercase tracking-wide text-slate-500">Resumo rápido</p>
              <ul className="mt-6 space-y-4 text-sm text-slate-600">
                <li>• Apoio para uma rotina de cuidados consistentes.</li>
                <li>• Ideal para quem busca complementar hábitos diários.</li>
                <li>• Compra segura pela página oficial do produto.</li>
              </ul>
              <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
                Sem promessas milagrosas — apenas uma opção adicional para o seu bem-estar diário.
              </div>
            </div>
          </div>
        </section>

        <section className="container-base py-16">
          <h2 className="section-title">Por que a rotina de higiene nem sempre resolve tudo?</h2>
          <p className="section-subtitle">
            Mesmo com escovação e fio dental, hábitos de vida, alimentação e estresse podem impactar o
            bem-estar bucal. Um suporte adicional pode ajudar a manter o equilíbrio.
          </p>
        </section>

        <section className="bg-white py-16">
          <div className="container-base">
            <h2 className="section-title">Benefícios em um tom realista</h2>
            <p className="section-subtitle">
              Foco em suporte e rotina, sem promessas absolutas.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
                  <h3 className="text-lg font-semibold text-slate-900">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="lead" className="container-base py-16">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
            <div>
              <h2 className="section-title">Receba informações e avance no seu ritmo</h2>
              <p className="section-subtitle">
                Se preferir, deixe seus dados para receber detalhes organizados e seguir com calma.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                <li>• Conteúdos práticos sobre hábitos de cuidado.</li>
                <li>• Lembretes e orientações gerais.</li>
                <li>• Acesso à oferta oficial quando estiver pronto.</li>
              </ul>
            </div>
            <LeadForm />
          </div>
        </section>

        <section className="bg-slate-100 py-16">
          <div className="container-base">
            <h2 className="section-title">Como usar</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {['Inclua na sua rotina diária', 'Mantenha hábitos de higiene consistentes', 'Acompanhe sua evolução com cuidado'].map(
                (step, index) => (
                  <div key={step} className="rounded-3xl bg-white p-6 shadow-soft">
                    <p className="text-sm font-semibold text-emerald-600">Passo {index + 1}</p>
                    <h3 className="mt-3 text-lg font-semibold text-slate-900">{step}</h3>
                    <p className="mt-2 text-sm text-slate-600">
                      O segredo está na consistência e em manter uma rotina equilibrada.
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="container-base py-16">
          <h2 className="section-title">Prova social com transparência</h2>
          <p className="section-subtitle">
            Exemplos ilustrativos de experiências individuais. Resultados podem variar.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {['“Senti mais conforto na rotina diária.”', '“Gostei de complementar minha higiene bucal.”', '“Ajudou a manter a sensação de cuidado contínuo.”'].map(
              (quote, index) => (
                <div key={quote} className="rounded-3xl border border-slate-200 bg-white p-6">
                  <p className="text-sm text-slate-600">{quote}</p>
                  <p className="mt-4 text-xs text-slate-400">Exemplo ilustrativo {index + 1}</p>
                </div>
              ),
            )}
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-base">
            <h2 className="section-title">Perguntas frequentes</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {faqs.map((item) => (
                <div key={item.question} className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                  <h3 className="text-sm font-semibold text-slate-900">{item.question}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container-base py-16">
          <div className="rounded-3xl bg-slate-900 px-8 py-12 text-white shadow-soft md:px-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold md:text-3xl">Pronto para conhecer a oferta oficial?</h2>
                <p className="mt-3 text-sm text-slate-200">
                  Acesse a página oficial de {PRODUCT_NAME} para detalhes completos e condições atuais.
                </p>
              </div>
              <CTAButton placement="offer" label={PRIMARY_CTA} className="bg-white text-slate-900 hover:bg-slate-100" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
