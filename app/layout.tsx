import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import { PRODUCT_NAME, NICHE } from '../lib/config';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `${PRODUCT_NAME} | Rotina de ${NICHE}`,
  description: `Descubra como ${PRODUCT_NAME} pode apoiar sua rotina de bem-estar bucal com hábitos consistentes e escolhas inteligentes.`,
  openGraph: {
    title: `${PRODUCT_NAME} | Rotina de ${NICHE}`,
    description:
      'Conheça uma rotina de apoio para bem-estar bucal com foco em hábitos consistentes.',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Script id="datalayer-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];`}
        </Script>
        {children}
      </body>
    </html>
  );
}
