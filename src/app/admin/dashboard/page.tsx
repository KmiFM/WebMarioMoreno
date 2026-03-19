"use client";

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const router = useRouter();
  const [loadingUser, setLoadingUser] = useState(true);

  // Estados del formulario
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [category, setCategory] = useState('arte');
  const [subcategory, setSubcategory] = useState('Todos');
  const [year, setYear] = useState('');
  const [dimensions, setDimensions] = useState('');
  const [exhib, setExhib] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  
  const [msg, setMsg] = useState("");
  const [uploading, setUploading] = useState(false);

  const subcategories = ["Todos", "Modelado 3d", "Renders", "Prueba de materiales e iluminación", "Prueba de montaje", "Especificaciones técnicas", "Documentacion técnica", "Animación"];

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) router.push('/admin');
      else setLoadingUser(false);
    });
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/admin');
  }

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);
    setMsg("Cargando imagen al servidor...");
    let imageUrl = "";

    // 1. Subir imagen a Supabase Storage
    if (imageFile) {
      const fileExt = imageFile.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      
      const { error: uploadError } = await supabase.storage
        .from('portfolio_images')
        .upload(fileName, imageFile);

      if (uploadError) {
        console.error(uploadError);
        setMsg("Hubo un error subiendo la imagen. Asegúrate de haber creado el bucket público 'portfolio_images'.");
        setUploading(false);
        return;
      }
      
      const { data: publicUrlData } = supabase.storage.from('portfolio_images').getPublicUrl(fileName);
      imageUrl = publicUrlData.publicUrl;
    }

    setMsg("Guardando datos...");

    // 2. Insertar fila en la Base de Datos
    const { error: dbError } = await supabase.from('portfolio_items').insert([
      {
        title,
        description: desc,
        category,
        subcategory,
        image_url: imageUrl,
        year,
        dimensions,
        exhibition: exhib
      }
    ]);

    if (dbError) {
      setMsg("Error al guardar en base de datos. Verifica el archivo supabase_admin_setup.sql.");
      console.error(dbError);
    } else {
      setMsg("¡Obra publicada con éxito! Ya puedes verla en tu portafolio.");
      setTitle(""); setDesc(""); setImageFile(null); setYear(""); setDimensions(""); setExhib("");
      (document.getElementById('fileUpload') as HTMLInputElement).value = '';
    }
    setUploading(false);
  };

  if (loadingUser) return <div style={{ textAlign: 'center', padding: '4rem' }}>Verificando credenciales de seguridad...</div>;

  return (
    <div className="animate-fade-in delay-100" style={{ paddingBottom: '4rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', alignItems: 'center' }}>
        <h1 style={{ fontSize: '2rem' }}>Panel de Control Exclusivo</h1>
        <button onClick={handleLogout} style={{ padding: '0.6rem 1.5rem', background: 'transparent', color: 'var(--art-accent-1)', border: '1px solid var(--border-color)', borderRadius: '6px', cursor: 'pointer', fontWeight: '500' }}>
          Cerrar Sesión
        </button>
      </div>
      
      <div className="glass-card" style={{ padding: '2.5rem', maxWidth: '650px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--arch-accent-1)' }}>Cargar Nueva Obra / Proyecto</h2>
        
        <form onSubmit={handleUpload} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <input type="text" placeholder="Título de la Obra *" value={title} onChange={e => setTitle(e.target.value)} required className="admin-input" />
          <textarea placeholder="Descripción o concepto de la obra..." value={desc} onChange={e => setDesc(e.target.value)} rows={3} className="admin-input" />
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ flex: 1 }}>
              <label style={{ fontSize:'0.8rem', color: 'var(--text-secondary)', marginBottom:'0.3rem', display:'block' }}>Categoría Principal:</label>
              <select value={category} onChange={e => setCategory(e.target.value)} className="admin-input" style={{ width: '100%' }}>
                <option value="arte">Arte</option>
                <option value="arquitectura">Arquitectura</option>
              </select>
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ fontSize:'0.8rem', color: 'var(--text-secondary)', marginBottom:'0.3rem', display:'block' }}>Sub-categoría Visual:</label>
              <select value={subcategory} onChange={e => setSubcategory(e.target.value)} className="admin-input" style={{ width: '100%' }}>
                {subcategories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <input type="text" placeholder="Año (ej. 2024)" value={year} onChange={e => setYear(e.target.value)} className="admin-input" style={{flex: 1}} />
            <input type="text" placeholder="Dimensiones (ej. 150x150cm)" value={dimensions} onChange={e => setDimensions(e.target.value)} className="admin-input" style={{flex: 1}} />
          </div>
          
          <input type="text" placeholder="Exhibición (ej. Bienal de Venecia)" value={exhib} onChange={e => setExhib(e.target.value)} className="admin-input" />
          
          <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px', border: '1px dashed var(--border-color)' }}>
            <label style={{ display: 'block', marginBottom: '0.8rem', color: 'var(--text-secondary)' }}>📸 Foto de la Obra o Render:</label>
            <input id="fileUpload" type="file" onChange={e => setImageFile(e.target.files?.[0] || null)} className="admin-input" style={{ border: 'none', padding: 0 }} accept="image/*" />
          </div>

          {msg && (
            <p style={{ padding: '0.8rem', background: msg.includes('Error') || msg.includes('Hubo') ? 'rgba(255,0,0,0.1)' : 'rgba(0,255,0,0.1)', color: msg.includes('Error') || msg.includes('Hubo') ? 'var(--art-accent-2)' : '#4ade80', borderRadius: '6px' }}>
              {msg}
            </p>
          )}

          <button type="submit" disabled={uploading} style={{ background: uploading ? '#555' : '#fff', color: uploading ? '#aaa' : '#000', padding: '1rem', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: uploading ? 'not-allowed' : 'pointer', marginTop: '1rem', transition: 'background 0.3s' }}>
            {uploading ? 'Cargando y Publicando...' : '🚀 Guardar y Publicar Ahora'}
          </button>
        </form>
      </div>

      <style>{`
        .admin-input {
          padding: 0.9rem;
          background: rgba(0,0,0,0.3);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          color: #fff;
          font-family: inherit;
        }
        .admin-input::placeholder {
          color: var(--text-secondary);
        }
        .admin-input:focus {
          outline: none;
          border-color: var(--art-accent-1);
        }
      `}</style>
    </div>
  );
}
