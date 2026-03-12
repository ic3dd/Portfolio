# Arquitetura do Portfólio Pessoal

## Visão Geral

Projeto monorepo Next.js (App Router) com front-end público, painel admin e backend via **Supabase** (Auth, PostgreSQL, Storage).

---

## Estrutura de Pastas Recomendada

```
portfolio/
├── app/                          # Next.js App Router
│   ├── (public)/                 # Grupo de rotas públicas
│   │   ├── layout.tsx            # Layout público (Navbar + conteúdo)
│   │   ├── page.tsx              # Página inicial (Home)
│   │   └── contato/
│   │       └── page.tsx          # [Opcional] Página de contato separada
│   │
│   ├── admin/                    # Painel de administração (protegido)
│   │   ├── layout.tsx            # Layout admin (sidebar, auth check)
│   │   ├── page.tsx              # Dashboard
│   │   ├── login/
│   │   │   └── page.tsx          # Login
│   │   ├── projetos/
│   │   │   ├── page.tsx          # Listagem CRUD
│   │   │   ├── novo/
│   │   │   │   └── page.tsx      # Criar projeto
│   │   │   └── [id]/
│   │   │       └── page.tsx      # Editar projeto
│   │   └── conteudo/
│   │       └── page.tsx          # Editar Sobre Mim + Skills
│   │
│   ├── api/                      # API Routes (se necessário)
│   │   └── contato/
│   │       └── route.ts          # Envio de formulário de contato
│   │
│   ├── layout.tsx                # Root layout (providers, fontes)
│   └── globals.css               # Estilos globais + Tailwind
│
├── components/
│   ├── ui/                       # Componentes reutilizáveis base
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   └── ThemeToggle.tsx
│   │
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── AdminSidebar.tsx      # [Fase Admin]
│   │
│   ├── home/                     # Seções da página pública
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── ContactSection.tsx
│   │
│   └── admin/                    # [Fase Admin]
│       ├── ProjectForm.tsx
│       └── ContentEditor.tsx
│
├── lib/
│   ├── supabase/
│   │   ├── client.ts             # Cliente browser
│   │   ├── server.ts             # Cliente server (cookies)
│   │   └── middleware.ts         # Auth em rotas /admin
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   └── useProjects.ts
│   └── utils.ts
│
├── types/
│   └── index.ts                  # Tipos (Project, Skill, Profile, etc.)
│
├── public/
│   └── images/                   # Assets estáticos
│
├── docs/                         # Documentação
│   ├── ARCHITECTURE.md
│   ├── DATABASE_SCHEMA.md
│   └── STYLE_GUIDE.md
│
├── .env.local                    # Variáveis de ambiente (Supabase)
├── next.config.js
├── tailwind.config.ts
├── package.json
└── README.md
```

---

## Fluxo de Dados

- **Público**: Next.js busca dados no Supabase (projetos, sobre mim, skills) via Server Components ou fetch em `layout`/`page`. Leitura apenas.
- **Admin**: Login com Supabase Auth → sessão em cookie → middleware protege `/admin/*` → CRUD via Supabase Client; imagens via Storage.
- **Contato**: Formulário envia para API Route → Resend/SendGrid ou Supabase Edge Function (e-mail).

---

## Decisões Técnicas

| Escolha | Motivo |
|--------|--------|
| **App Router** | RSC, layouts aninhados, melhor SEO e performance. |
| **Supabase** | Auth + Postgres + Storage integrados, rápido de configurar. |
| **Grupo (public)** | Layout específico para vitrine sem afetar admin. |
| **Componentes em `/components`** | Separação clara: ui, layout, home, admin. |

---

## Próximos Passos (após sua confirmação)

1. Implementar rotas e componentes do **painel admin**.
2. Configurar **middleware** de autenticação em `/admin`.
3. Integrar **upload de imagens** no Storage do Supabase.
