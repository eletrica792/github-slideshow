import Link from 'next/link';

export const Footer = () => (
  <footer className="border-t border-slate-200 bg-white py-10">
    <div className="container-base flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <p className="text-sm text-slate-500">
        © {new Date().getFullYear()} ProDentim. Todos os direitos reservados.
      </p>
      <div className="flex flex-wrap gap-4 text-sm text-slate-600">
        <Link href="/privacy" className="hover:text-slate-900">
          Política de Privacidade
        </Link>
        <Link href="/terms" className="hover:text-slate-900">
          Termos de Uso
        </Link>
        <Link href="/disclaimer" className="hover:text-slate-900">
          Transparência
        </Link>
      </div>
    </div>
  </footer>
);
