# Schema do Banco de Dados (Supabase / PostgreSQL)

## Visão Geral

O Supabase já fornece a tabela `auth.users` para autenticação. As tabelas abaixo são criadas no **Schema public** para portfólio e CMS.

---

## Tabelas

### 1. `profiles` (dados do admin + conteúdo “Sobre Mim”)

Usada para armazenar o perfil público editável e vincular ao usuário admin.

| Coluna       | Tipo         | Restrições        | Descrição                    |
|-------------|--------------|-------------------|------------------------------|
| id          | uuid         | PK, FK → auth.users | Id do usuário (admin)      |
| full_name   | text         |                   | Nome exibido no hero         |
| headline    | text         |                   | Cargo/nicho (ex: "Desenvolvedor Full-Stack") |
| about_text  | text         |                   | Texto da seção "Sobre Mim"   |
| avatar_url  | text         |                   | URL do avatar (Storage)      |
| email_contact| text         |                   | E-mail para contato/formulário |
| linkedin_url| text         |                   | Link LinkedIn                |
| github_url  | text         |                   | Link GitHub                  |
| updated_at  | timestamptz  | default now()     | Última atualização           |

**RLS**: Leitura pública; escrita apenas onde `auth.uid() = id`.

---

### 2. `skills`

Habilidades técnicas e soft skills exibidas na seção “Sobre Mim”.

| Coluna     | Tipo        | Restrições     | Descrição           |
|------------|-------------|----------------|---------------------|
| id         | uuid        | PK, default gen_random_uuid() | Id da skill   |
| name       | text        | NOT NULL       | Nome da habilidade  |
| category   | text        |               | Ex: "technical", "soft" |
| sort_order | int         | default 0      | Ordem de exibição   |
| created_at | timestamptz | default now()  | Criação             |

**RLS**: Leitura pública; escrita apenas para usuários autenticados (admin).

---

### 3. `projects`

Projetos exibidos na galeria do portfólio.

| Coluna        | Tipo         | Restrições     | Descrição                    |
|---------------|--------------|----------------|------------------------------|
| id            | uuid         | PK, default gen_random_uuid() | Id do projeto        |
| title         | text         | NOT NULL       | Título do projeto            |
| slug          | text         | UNIQUE         | URL amigável (ex: "ecommerce-api") |
| description   | text         |                | Descrição breve              |
| cover_image_url | text       |                | URL da imagem de capa (Storage) |
| technologies  | text[]       |                | Tags (ex: ["React", "Node.js"]) |
| github_url    | text         |                | Link repositório             |
| live_url      | text         |                | Link demo ao vivo            |
| featured      | boolean      | default false  | Destaque na home             |
| sort_order    | int          | default 0      | Ordem na listagem            |
| published     | boolean      | default true   | Exibir no site               |
| created_at    | timestamptz  | default now()  | Criação                      |
| updated_at    | timestamptz  | default now()  | Última atualização           |

**RLS**: Leitura pública onde `published = true`; escrita apenas para autenticados.

---

### 4. `contact_submissions` (opcional)

Para guardar envios do formulário de contato no próprio banco.

| Coluna   | Tipo        | Restrições | Descrição   |
|----------|-------------|------------|-------------|
| id       | uuid        | PK, default gen_random_uuid() | |
| name     | text        | NOT NULL   | Nome        |
| email    | text        | NOT NULL   | E-mail      |
| message  | text        | NOT NULL   | Mensagem    |
| created_at | timestamptz | default now() |         |

**RLS**: Inserção anônima (formulário); leitura apenas admin.

---

## SQL de Criação (Supabase SQL Editor)

```sql
-- Profiles (conteúdo "Sobre Mim" + links)
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  headline text,
  about_text text,
  avatar_url text,
  email_contact text,
  linkedin_url text,
  github_url text,
  updated_at timestamptz default now()
);

-- Skills
create table public.skills (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text check (category in ('technical', 'soft')),
  sort_order int default 0,
  created_at timestamptz default now()
);

-- Projects
create table public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  description text,
  cover_image_url text,
  technologies text[] default '{}',
  github_url text,
  live_url text,
  featured boolean default false,
  sort_order int default 0,
  published boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Contact submissions (opcional)
create table public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz default now()
);

-- RLS
alter table public.profiles enable row level security;
alter table public.skills enable row level security;
alter table public.projects enable row level security;
alter table public.contact_submissions enable row level security;

-- Profiles: leitura pública, escrita só dono
create policy "Profiles are viewable by everyone" on public.profiles for select using (true);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);

-- Skills: leitura pública, escrita autenticada
create policy "Skills are viewable by everyone" on public.skills for select using (true);
create policy "Authenticated users can manage skills" on public.skills for all using (auth.role() = 'authenticated');

-- Projects: leitura pública só publicados, escrita autenticada
create policy "Published projects are viewable by everyone" on public.projects for select using (published = true);
create policy "Authenticated users can manage projects" on public.projects for all using (auth.role() = 'authenticated');

-- Contact: insert público, select admin
create policy "Anyone can submit contact" on public.contact_submissions for insert with check (true);
create policy "Authenticated users can read submissions" on public.contact_submissions for select using (auth.role() = 'authenticated');
```

---

## Storage (Supabase)

- **Bucket `avatars`**: foto do perfil (público).
- **Bucket `covers`**: imagens de capa dos projetos (público).

Políticas: leitura pública; upload/update/delete apenas para `auth.role() = 'authenticated'`.
