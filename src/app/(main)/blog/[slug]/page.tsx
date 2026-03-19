import Link from 'next/link';

export default function BlogPost() {
  return (
    <main className="container animate-fade-in" style={{ maxWidth: '800px' }}>
      <div style={{ marginTop: '3rem', marginBottom: '2rem' }}>
        <Link href="/blog" style={{ color: 'var(--text-secondary)', display: 'inline-block', marginBottom: '2rem' }}>← Volver al Blog</Link>
        <h1 style={{ fontSize: '3rem', lineHeight: '1.2', marginBottom: '1rem' }}>Título de la Entrada de Blog</h1>
        <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          <span>Oct 12, 2024</span>
          <span>•</span>
          <span style={{ color: 'var(--art-accent-1)' }}>Arte</span>
        </div>
      </div>

      <article className="glass" style={{ padding: '3rem', borderRadius: '12px' }}>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
          Este es el contenido de la entrada del blog. En la versión final, este texto vendrá desde la base de datos de Supabase y permitirá darle formato usando Markdown.
        </p>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
          Aquí el autor puede explayarse sobre sus procesos creativos tanto en el ámbito de las artes plásticas como en la proyectación arquitectónica.
        </p>
      </article>
    </main>
  );
}
