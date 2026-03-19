"use client";

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) router.push('/admin/dashboard');
    });
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
    
    if (signInError) {
      setError("Credenciales inválidas o cuenta no registrada.");
      setLoading(false);
    } else {
      router.push('/admin/dashboard');
    }
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
      <div className="glass-card" style={{ padding: '3rem', width: '100%', maxWidth: '400px' }}>
        <h1 style={{ fontSize: '1.8rem', marginBottom: '2rem', textAlign: 'center' }}>Acceso MML Admin</h1>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Correo Electrónico</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="admin-input" style={{ width: '100%' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Contraseña</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required className="admin-input" style={{ width: '100%' }} />
          </div>
          {error && <p style={{ color: 'var(--art-accent-2)' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ marginTop: '1rem', background: loading ? '#555' : '#fff', color: loading ? '#aaa' : '#000', padding: '1rem', borderRadius: '6px', textAlign: 'center', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer', border: 'none', transition: 'background 0.3s' }}>
            {loading ? "Entrando..." : "Ingresar"}
          </button>
        </form>
      </div>

      <style>{`
        .admin-input {
          padding: 0.8rem;
          background: rgba(0,0,0,0.3);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          color: #fff;
          font-family: inherit;
        }
      `}</style>
    </div>
  );
}
