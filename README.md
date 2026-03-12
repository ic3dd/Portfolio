# Portfólio Pessoal

Site de portfólio dinâmico com front-end público e painel administrativo (CMS customizado).

## Stack

- **Front-end:** Next.js 14 (App Router), Tailwind CSS, Framer Motion
- **Back-end:** Supabase (Auth, PostgreSQL, Storage)

## Documentação

- [Arquitetura e estrutura de pastas](docs/ARCHITECTURE.md)
- [Schema do banco de dados](docs/DATABASE_SCHEMA.md)
- [Guia de estilo](docs/STYLE_GUIDE.md)

## Como rodar

1. **Instalar dependências**
   ```bash
   npm install
   ```

2. **Configurar ambiente**
   - Copie `.env.local.example` para `.env.local`
   - Crie um projeto no [Supabase](https://supabase.com) e preencha a URL e a chave anônima

3. **Rodar em desenvolvimento**
   ```bash
   npm run dev
   ```
   Acesse [http://localhost:3000](http://localhost:3000).

4. **Banco de dados**
   - No Supabase, abra o SQL Editor e execute o script em `docs/DATABASE_SCHEMA.md` para criar tabelas e RLS.

## Estrutura resumida

- `app/(public)/` — Página inicial e layout público (Navbar, Footer)
- `app/admin/` — Painel admin (a ser implementado após confirmação)
- `components/` — UI, layout, seções da home e (futuro) admin
- `lib/` — Utilitários e cliente Supabase
- `types/` — Tipos TypeScript

## Próximos passos

Após sua confirmação, será implementado o painel de administração (login, CRUD de projetos com upload de imagens, edição de “Sobre mim” e habilidades).
