import { FileText } from 'lucide-react';

export default function CVPage() {
  return (
    <main className="container animate-fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '4rem', paddingBottom: '4rem' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Curriculum Vitae</h1>
      <p style={{ maxWidth: '600px', textAlign: 'center', marginBottom: '3rem' }}>
        Mario Moreno Lazarte (@maritooth). N. 1987, Tucumán, Argentina.<br/>
        Estudiante de la Licenciatura en Artes Plásticas y estudios técnicos en Arquitectura y Urbanismo en FAU-UNT.
      </p>
      
      <button className="glass-card" style={{ padding: '1rem 2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', cursor: 'pointer', color: 'var(--text-primary)', transition: 'background 0.3s' }}>
        <FileText size={20} />
        Descargar CV Completo (PDF)
      </button>

      <div style={{ marginTop: '4rem', width: '100%', maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <section className="glass" style={{ padding: '2rem', borderRadius: '12px' }}>
          <h2 style={{ color: 'var(--art-accent-1)', marginBottom: '1rem' }}>Educación</h2>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
            <li><strong>Licenciatura en Artes Plásticas</strong> — (En curso)</li>
            <li><strong>Taller C</strong> — Graduado en 2024</li>
            <li><strong>Arquitectura y Urbanismo (Estudios Técnicos)</strong> — FAU-UNT</li>
          </ul>
        </section>

        <section className="glass" style={{ padding: '2rem', borderRadius: '12px' }}>
          <h2 style={{ color: 'var(--art-accent-2)', marginBottom: '1rem' }}>Experiencia Profesional</h2>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
            <li><strong>Asistente Técnico y de Montaje</strong> — Para artistas como Carlota Beltrame, Geli Gonzales, Claudia Martínez, y Eugenia Garay Basualdo.</li>
            <li><strong>Participante en Proyectos Curatoriales</strong> — Bienal de Venecia, MUNTREF, y Centro Cultural Borges, entre otros.</li>
          </ul>
        </section>

        <section className="glass" style={{ padding: '2rem', borderRadius: '12px' }}>
          <h2 style={{ color: 'var(--art-accent-1)', marginBottom: '1rem' }}>Exhibiciones Notables</h2>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
            <li><strong>Galpón 20.99</strong> — Obra: "Emergency Mechanism (The Living Reflection)". Curaduría: Javier Juárez. Artistas en exhibición: Rolo Juárez, Marcelo Totis, Mario Moreno Lazarte.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
