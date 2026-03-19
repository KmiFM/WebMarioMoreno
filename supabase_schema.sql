-- 1. Create Portfolio Table
CREATE TABLE public.portfolio_items (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  description text,
  category text NOT NULL CHECK (category IN ('arte', 'arquitectura')),
  image_url text,
  year text,
  dimensions text,
  exhibition text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Create Blog Posts Table
CREATE TABLE public.blog_posts (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  content text NOT NULL,
  category text NOT NULL CHECK (category IN ('arte', 'arquitectura', 'general')),
  cover_image text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Set up Row Level Security (RLS)
-- Abilitar RLS en las tablas (por seguridad, para que dsp solo el admin pueda editar)
ALTER TABLE public.portfolio_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Crear políticas para que TODO EL MUNDO pueda LEER (SELECT)
CREATE POLICY "Public profiles are viewable by everyone." 
ON public.portfolio_items FOR SELECT USING (true);

CREATE POLICY "Public blog posts are viewable by everyone." 
ON public.blog_posts FOR SELECT USING (true);

-- (Las políticas de INSERT/UPDATE/DELETE las asociaremos al admin más adelante)
