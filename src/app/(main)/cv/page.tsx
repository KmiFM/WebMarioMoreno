import { FileText, Download } from 'lucide-react';

export default function CVPage() {
  return (
    <main className="container animate-fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '4rem', paddingBottom: '4rem' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem', textAlign: 'center' }}>Mario Cristian Moreno Lazarte</h1>
      <p style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
        Diseñador / Constructor / Artista Plástico<br/>
        Nacido el 09/03/1987 (38 años) en San Miguel de Tucumán.<br/>
        MP: 2459
      </p>
      
      <button className="glass-card" style={{ padding: '1rem 2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', cursor: 'pointer', color: 'var(--text-primary)', transition: 'background 0.3s' }}>
        <Download size={20} />
        Descargar CV PDF Completo
      </button>

      <div style={{ marginTop: '4rem', width: '100%', maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        <section className="glass" style={{ padding: '2rem', borderRadius: '12px' }}>
          <h2 style={{ color: 'var(--arch-accent-1)', marginBottom: '1.5rem', fontSize: '1.6rem' }}>Formación Académica</h2>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem', color: 'var(--text-secondary)' }}>
            <li>
              <strong style={{ color: 'var(--text-primary)' }}>Arquitecto Urbanista (Cursando Proyecto Final de Carrera)</strong><br/>
              Facultad de Arquitectura y Urbanismo – Universidad Nacional de Tucumán.
            </li>
            <li>
              <strong style={{ color: 'var(--text-primary)' }}>Licenciatura en Artes Plásticas (Final de Carrera - 2016)</strong><br/>
              Facultad de Artes – Universidad Nacional de Tucumán.
            </li>
            <li>
              <strong style={{ color: 'var(--text-primary)' }}>Técnico Superior en Construcciones (Egresado 2004)</strong><br/>
              Escuela Técnica Nº1 Concepción - Tucumán.
            </li>
          </ul>
        </section>

        <section className="glass" style={{ padding: '2rem', borderRadius: '12px' }}>
          <h2 style={{ color: 'var(--art-accent-1)', marginBottom: '1.5rem', fontSize: '1.6rem' }}>Experiencia Laboral</h2>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem', color: 'var(--text-secondary)' }}>
            <li>
              <strong style={{ color: 'var(--text-primary)' }}>2025 – Modelado 3D, Render y Diseño Gráfico</strong><br/>
              Para Artistas Plásticos.
            </li>
            <li>
              <strong style={{ color: 'var(--text-primary)' }}>2024 – Dirección de Obra y Diseño</strong><br/>
              Para Hoteles en Termas de Rio Hondo.
            </li>
            <li>
              <strong style={{ color: 'var(--text-primary)' }}>2022 – Diseñador y Dibujante</strong><br/>
              Estudio Conceptual Arquitectos.
            </li>
            <li>
              <strong style={{ color: 'var(--text-primary)' }}>2020-2026 – Dibujante y asesor Técnico</strong><br/>
              Arq. Oscar Galvez y Asociados.
            </li>
            <li>
              <strong style={{ color: 'var(--text-primary)' }}>2014-2026 – Diseño Arquitectónico, Dirección y Ejecución de Obra</strong><br/>
              Con personal a cargo (obra nueva/remodelación/ampliación) de forma particular.
            </li>
            <li>
              <strong style={{ color: 'var(--text-primary)' }}>2013-2015 – Profesor particular de Dibujo Técnico</strong><br/>
              En apoyatura para Facultades de Arquitectura, Diseño de Interiores y Licenciatura en Artes plásticas (UNT).
            </li>
            <li>
              <strong style={{ color: 'var(--text-primary)' }}>2009-2011 – Diseño, Mantenimiento y Atención al público</strong><br/>
              En Centro de Plotteo y Diseño (Av Roca 1800 SMT).
            </li>
          </ul>
        </section>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <section className="glass" style={{ padding: '2rem', borderRadius: '12px' }}>
            <h2 style={{ color: 'var(--art-accent-2)', marginBottom: '1.5rem', fontSize: '1.6rem' }}>Cursos</h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--text-secondary)' }}>
              <li>Adobe Photoshop (2018)</li>
              <li>Corel Draw (2018)</li>
              <li>Community Manager (2018)</li>
            </ul>
          </section>

          <section className="glass" style={{ padding: '2rem', borderRadius: '12px' }}>
            <h2 style={{ color: 'var(--arch-accent-2)', marginBottom: '1.5rem', fontSize: '1.6rem' }}>Programas de PC</h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--text-secondary)' }}>
              <li><strong>Windows / Office</strong></li>
              <li><strong>AutoCad</strong> – Dibujo 2D</li>
              <li><strong>Sketchup</strong> – Dibujo 3D</li>
              <li><strong>Archicad</strong> – Diseño paramétrico</li>
              <li><strong>Lumion / V-Ray / Enscape</strong> – 3D y Render</li>
              <li><strong>Corel</strong> – Diseño y Dibujo Vectorial 2D</li>
              <li><strong>Photoshop</strong> – Dibujo 2D, Fotomontaje y Animación</li>
              <li><strong>Lightroom</strong> – Post-Edición Fotográfica</li>
            </ul>
          </section>
        </div>

      </div>
    </main>
  );
}
