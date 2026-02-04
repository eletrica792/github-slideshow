# ProDentim Landing Page (Next.js 14 + Tailwind CSS)

Micro-app de landing page focada em captação de cliques/lead com estrutura pronta para redirecionar para a página oficial do produto no ClickBank.

## Requisitos

- Node.js 18+
- npm 9+

## Como rodar localmente

```bash
npm install
npm run dev
```

A aplicação ficará disponível em `http://localhost:3000`.

## Configuração de ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```bash
NEXT_PUBLIC_OUTBOUND_URL="https://seu-link-clickbank.com"
NEXT_PUBLIC_WHATSAPP_URL="https://wa.me/0000000000"
```

## Build de produção

```bash
npm run build
npm run start
```

## Deploy (Vercel)

1. Suba o repositório no GitHub.
2. Conecte o projeto à Vercel.
3. Configure as variáveis `NEXT_PUBLIC_OUTBOUND_URL` e `NEXT_PUBLIC_WHATSAPP_URL`.
4. Faça o deploy.

## Observações de compliance

- Linguagem neutra e informativa, sem promessas de cura.
- Aviso obrigatório incluído em todas as páginas.
