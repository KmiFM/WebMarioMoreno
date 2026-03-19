import { supabase } from '@/lib/supabase';

export const revalidate = 0;

export default async function ArtPortfolio() {
  const { data: artworks } = await supabase
    .from('portfolio_items')
    .select('*')
    .eq('category', 'arte')
    .order('created_at', { ascending: false });

  return (
    <main className="container animate-fade-in" style={{ paddingBottom: '4rem' }}>
      <h1 style={{ marginTop: '3rem', fontSize: '2.5rem', color: 'var(--art-accent-1)' }}>Obras de Arte</h1>
      <p style={{ marginBottom: '3rem' }}>Exploración visual a través del color, reflexión y espacio.</p>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '2rem'
      }}>
        {artworks && artworks.length > 0 ? (
          artworks.map((item) => (
            <div key={item.id} className="glass-card" style={{ height: '400px', display: 'flex', alignItems: 'flex-end', padding: '1.5rem', background: item.image_url ? `url(${item.image_url}) center/cover` : `linear-gradient(to top, rgba(0,0,0,0.9), transparent), var(--surface-hover)` }}>
              <div style={{ width: '100%', padding: item.image_url ? '1rem' : '0', background: item.image_url ? 'rgba(0,0,0,0.7)' : 'transparent', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '1.4rem', lineHeight: '1.2', marginBottom: '0.5rem' }}>{item.title}</h3>
                {item.exhibition && <p style={{ color: 'var(--art-accent-2)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Exhibición: {item.exhibition}</p>}
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{item.description} {item.dimensions && ` | ${item.dimensions}`} {item.year && ` | ${item.year}`}</p>
              </div>
            </div>
          ))
        ) : (
          <p style={{ color: 'var(--text-secondary)' }}>Aún no hay obras cargadas.</p>
        )}
      </div>
    </main>
  );
}
