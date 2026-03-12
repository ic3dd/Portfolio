# Guia de Estilo — Portfólio Pessoal

## Objetivo

Transmitir **profissionalismo**, **clareza** e **modernidade**, com suporte a Dark/Light Mode e micro-interações sutis.

---

## Paleta de Cores

### Modo Claro (Light)

| Uso        | Nome Token   | Hex       | Uso na interface        |
|-----------|--------------|-----------|---------------------------|
| Background| `--bg-primary`   | `#FAFAFA` | Fundo principal          |
| Surface   | `--bg-surface`   | `#FFFFFF` | Cards, navbar            |
| Border    | `--border`       | `#E5E7EB` | Bordas sutis             |
| Texto     | `--text-primary` | `#111827` | Títulos e corpo          |
| Texto suave | `--text-muted` | `#6B7280` | Legendas, placeholders   |
| Destaque  | `--accent`       | `#2563EB` | Links, CTA, destaques    |
| Destaque hover | `--accent-hover` | `#1D4ED8` | Hover em botões/links |

### Modo Escuro (Dark)

| Uso        | Nome Token   | Hex       |
|-----------|--------------|-----------|
| Background| `--bg-primary`   | `#0F172A` |
| Surface   | `--bg-surface`   | `#1E293B` |
| Border    | `--border`       | `#334155` |
| Texto     | `--text-primary` | `#F8FAFC` |
| Texto suave | `--text-muted` | `#94A3B8` |
| Destaque  | `--accent`       | `#3B82F6` |
| Destaque hover | `--accent-hover` | `#60A5FA` |

As variáveis serão aplicadas em `globals.css` e referenciadas no Tailwind para manter consistência e tema.

---

## Tipografia

### Fontes (Google Fonts)

1. **Títulos e destaque**  
   - **Font:** **Plus Jakarta Sans**  
   - Uso: Hero, títulos de seção, nomes de projetos.  
   - Link: `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap`

2. **Corpo e leitura**  
   - **Font:** **Source Sans 3**  
   - Uso: Parágrafos, descrições, formulários.  
   - Link: `https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap`

Combinação: Plus Jakarta Sans transmite modernidade e autoridade; Source Sans 3 garante leitura confortável e profissional.

### Escala de tamanhos (sugestão Tailwind)

- Hero título: `text-4xl` → `md:text-5xl` → `lg:text-6xl`
- Título de seção: `text-2xl` → `md:text-3xl`
- Subtítulo / headline: `text-lg` → `md:text-xl`
- Corpo: `text-base`
- Pequeno / labels: `text-sm`
- Muito pequeno: `text-xs`

---

## Espaçamento e Layout

- **Container:** `max-w-6xl` ou `max-w-7xl` centralizado, padding horizontal `px-4 sm:px-6 lg:px-8`.
- **Seções:** `py-16` ou `py-20` (md/lg) para respiro entre blocos.
- **Mobile First:** base em 1 coluna; grid de projetos em 2 colunas a partir de `sm`, 3 em `lg`.

---

## Componentes

- **Botão primário (CTA):** fundo `--accent`, texto branco, `rounded-lg`, padding generoso, sombra leve e hover com `--accent-hover` e leve scale (ex.: Framer Motion `scale(1.02)`).
- **Cards de projeto:** fundo `--bg-surface`, borda `--border`, `rounded-xl`, sombra sutil; hover com elevação e transição suave.
- **Links:** cor `--accent`, underline opcional no hover.

---

## Animações (Framer Motion)

- **Entrada de seções:** `fade-in` + `slide-up` (opacity 0→1, y 20→0), duração ~0.5s, stagger em filhos quando fizer sentido.
- **Hero:** texto e CTA com pequeno delay para sensação de “reveal”.
- **Cards:** hover com `scale(1.02)` e `transition` de sombra; evitar movimentos excessivos.
- **Theme toggle:** transição de cor suave (CSS ou Framer) para não piscar.

---

## Resumo de Tokens (Tailwind)

Será configurado em `tailwind.config.ts` usando as variáveis CSS acima, por exemplo:

- `bg-primary`, `bg-surface`
- `text-primary`, `text-muted`
- `border-border`
- `accent`, `accent-hover`

Isso garante um design system coerente e fácil manutenção ao adicionar o painel admin depois.
