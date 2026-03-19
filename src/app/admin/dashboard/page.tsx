export default function AdminDashboard() {
  return (
    <div>
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Panel de Control</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        
        <div className="glass-card" style={{ padding: '2rem' }}>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--art-accent-1)' }}>Portafolio de Arte</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Administra tus obras, sube nuevas imágenes y edita detalles.</p>
          <button style={{ padding: '0.8rem 1.5rem', background: 'rgba(255,255,255,0.1)', border: '1px solid var(--border-color)', color: '#fff', borderRadius: '6px', cursor: 'pointer' }}>Añadir Obra</button>
        </div>

        <div className="glass-card" style={{ padding: '2rem' }}>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--arch-accent-1)' }}>Proyectos de Arquitectura</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Añade tus renders, planos y descripciones de proyectos.</p>
          <button style={{ padding: '0.8rem 1.5rem', background: 'rgba(255,255,255,0.1)', border: '1px solid var(--border-color)', color: '#fff', borderRadius: '6px', cursor: 'pointer' }}>Añadir Proyecto</button>
        </div>

        <div className="glass-card" style={{ padding: '2rem' }}>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Entradas de Blog</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Escribe nuevas bitácoras y reflexiones sobre tu proceso.</p>
          <button style={{ padding: '0.8rem 1.5rem', background: 'rgba(255,255,255,0.1)', border: '1px solid var(--border-color)', color: '#fff', borderRadius: '6px', cursor: 'pointer' }}>Escribir Entrada</button>
        </div>

      </div>
    </div>
  );
}
