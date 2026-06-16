-- CloudLine Studio — leads table
-- Run this in the Supabase SQL editor for your project.

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text,
  email text not null,
  phone text,
  aims text[] default '{}',
  services text[] default '{}',
  source text default 'website'
);

-- Enable Row Level Security. The API writes with the service_role key, which
-- bypasses RLS, so we intentionally add NO public policies (no anonymous reads/writes).
alter table public.leads enable row level security;
