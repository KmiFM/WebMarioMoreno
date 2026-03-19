import Link from 'next/link';

export default function AdminLogin() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
      <div className="glass-card" style={{ padding: '3rem', width: '100%', maxWidth: '400px' }}>
        <h1 style={{ fontSize: '1.8rem', marginBottom: '2rem', textAlign: 'center' }}>Acceso Admin</h1>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email</label>
            <input type="email" placeholder="mario@example.com" style={{ width: '100%', padding: '0.8rem', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-color)', borderRadius: '6px', color: '#fff' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Contraseña</label>
            <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '0.8rem', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-color)', borderRadius: '6px', color: '#fff' }} />
          </div>
          {/* Mock link to dashboard. In reality, this would submit via Supabase Auth */}
          <Link href="/admin/dashboard" style={{ marginTop: '1rem', background: '#fff', color: '#000', padding: '1rem', borderRadius: '6px', textAlign: 'center', fontWeight: '500' }}>
            Ingresar
          </Link>
        </form>
      </div>
    </div>
  );
}
