import { Suspense } from 'react';
import { supabase } from '@/lib/supabase';
import ArtGallery from './ArtGallery';

export const revalidate = 0;

export default async function ArtPortfolio() {
  const { data: artworks } = await supabase
    .from('portfolio_items')
    .select('*')
    .eq('category', 'arte')
    .order('created_at', { ascending: false });

  return (
    <main className="container animate-fade-in" style={{ paddingBottom: '4rem' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ marginTop: '3rem', fontSize: '3rem', color: 'var(--art-accent-1)' }}>Obras de Arte</h1>
        <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>Exploración visual a través del color, reflexión y espacio.</p>
      </div>
      
      <Suspense fallback={<div style={{ textAlign: 'center' }}>Cargando galería...</div>}>
        <ArtGallery initialArtworks={artworks || []} />
      </Suspense>
    </main>
  );
}
