-- ========================================================
-- EJECUTA ESTO EN EL "SQL EDITOR" DE SUPABASE
-- PARA PERMITIR QUE EL ADMIN PUEDA SUBIR OBRAS
-- ========================================================

-- 1. Modificar la base de datos para agregar la subcategoría si no existía 
-- (Si ya la tiene, Postgres puede dar un aviso inofensivo)
ALTER TABLE public.portfolio_items ADD COLUMN IF NOT EXISTS subcategory text;

-- 2. Crear una política de seguridad (RLS) para que el Administrador Logueado pueda insertar datos
CREATE POLICY "Permitir insertar a los usuarios autenticados" 
ON public.portfolio_items 
FOR INSERT TO authenticated 
WITH CHECK (true);

-- (Igualmente para el blog en el futuro)
CREATE POLICY "Permitir insertar blog a los usuarios autenticados" 
ON public.blog_posts
FOR INSERT TO authenticated 
WITH CHECK (true);

-- ========================================================
-- RECUERDA ESTAS 2 COSAS EXTRA EN SUPABASE:
-- 1. Ve a "Authentication > Users" y dale a "Add User" para crearte tu propia cuenta con tu email personal.
-- 2. Ve a "Storage", clickea en "New Bucket", ponle de nombre "portfolio_images" EXACTAMENTE escrito así, EN MINÚSCULAS y haz clic en la opción "Public Bucket".
-- 3. Una vez creado el Bucket "portfolio_images", ve a las pestañas de "Policies" del bucket, y dale a "New Policy" -> "Get started quickly" -> Permite a "All users" hacer "SELECT" de las fotos, y OTRA regla permitiendo a "Authenticated users" hacer "INSERT" para que puedas subirlas.
