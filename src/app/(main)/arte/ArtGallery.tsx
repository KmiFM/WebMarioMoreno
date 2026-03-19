"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ArtGallery({ initialArtworks }: { initialArtworks: any[] }) {
  const searchParams = useSearchParams();
  
  const urlFilter = searchParams.get('filter');
  const [activeFilter, setActiveFilter] = useState(urlFilter || "Todos");

  // Si cambia la URL por el menú, actualizamos el estado interno
  useEffect(() => {
    setActiveFilter(urlFilter || "Todos");
  }, [urlFilter]);

  const filteredArtworks = activeFilter === "Todos" 
    ? initialArtworks 
    : initialArtworks.filter((item: any) => item.subcategory === activeFilter);

  return (
    <>
      {activeFilter !== "Todos" && (
        <h2 className="animate-fade-in" style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--art-accent-2)', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Filtrando por: {activeFilter}
        </h2>
      )}

      <div className="animate-fade-in delay-200" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '2rem'
      }}>
        {filteredArtworks && filteredArtworks.length > 0 ? (
          filteredArtworks.map((item: any) => (
            <div key={item.id} className="glass-card" style={{ height: '400px', display: 'flex', alignItems: 'flex-end', padding: '1.5rem', background: item.image_url ? `url(${item.image_url}) center/cover` : `linear-gradient(to top, rgba(0,0,0,0.9), transparent), var(--surface-hover)` }}>
              <div style={{ width: '100%', padding: item.image_url ? '1rem' : '0', background: item.image_url ? 'rgba(0,0,0,0.7)' : 'transparent', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '1.4rem', lineHeight: '1.2', marginBottom: '0.5rem' }}>{item.title}</h3>
                {item.exhibition && <p style={{ color: 'var(--art-accent-2)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Exhibición: {item.exhibition}</p>}
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{item.description} {item.dimensions ? ` | ${item.dimensions}` : ''} {item.year ? ` | ${item.year}` : ''}</p>
              </div>
            </div>
          ))
        ) : (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem 0', color: 'var(--text-secondary)' }}>
            <p>Aún no hay proyectos cargados en la categoría: <strong>{activeFilter}</strong>.</p>
          </div>
        )}


      </div>
    </>
  );
}
