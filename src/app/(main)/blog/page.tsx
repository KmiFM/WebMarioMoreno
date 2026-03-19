import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export const revalidate = 0;

export default async function BlogFeed() {
  const { data: posts } = await supabase
    .from('blog_posts')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <main className="container animate-fade-in" style={{ paddingBottom: '4rem' }}>
      <h1 style={{ marginTop: '3rem', fontSize: '2.5rem' }}>Blog / Bitácora</h1>
      <p style={{ marginBottom: '3rem' }}>Escritos sobre arte, espacio y diseño.</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px' }}>
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="glass-card" style={{ padding: '2rem', display: 'block' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: post.category === 'arte' ? 'var(--art-accent-1)' : 'var(--arch-accent-1)' }}>
                  {post.category}
                </span>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                   {new Date(post.created_at).toLocaleDateString('es-ES')}
                </span>
              </div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{post.title}</h2>
              <p>Leer más...</p>
            </Link>
          ))
        ) : (
          <p style={{ color: 'var(--text-secondary)' }}>No hay entradas publicadas todavía.</p>
        )}
      </div>
    </main>
  );
}
