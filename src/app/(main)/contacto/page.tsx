import { Mail, Instagram, MapPin, Phone } from 'lucide-react';

export default function ContactoPage() {
  return (
    <main className="container animate-fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '4rem', paddingBottom: '4rem' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Contacto</h1>
      <p style={{ maxWidth: '600px', textAlign: 'center', marginBottom: '3rem' }}>
        Ponte en contacto para consultas sobre proyectos de diseño, dirección de obra, arte o colaboraciones.
      </p>

      <div className="glass-card" style={{ padding: '3rem', width: '100%', maxWidth: '500px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        <a href="mailto:maritooth87@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)', transition: 'color 0.3s' }}>
          <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}>
            <Mail size={24} color="var(--art-accent-1)" />
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Email</h3>
            <p style={{ color: 'var(--text-secondary)' }}>maritooth87@gmail.com</p>
          </div>
        </a>

        <a href="tel:+540386515446282" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)', transition: 'color 0.3s' }}>
          <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}>
            <Phone size={24} color="#4ade80" />
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Celular / WhatsApp</h3>
            <p style={{ color: 'var(--text-secondary)' }}>(03865) 15446282</p>
          </div>
        </a>

        <a href="https://instagram.com/maritooth" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)', transition: 'color 0.3s' }}>
          <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}>
            <Instagram size={24} color="var(--art-accent-2)" />
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Instagram</h3>
            <p style={{ color: 'var(--text-secondary)' }}>@maritooth</p>
          </div>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)' }}>
          <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}>
            <MapPin size={24} color="var(--arch-accent-1)" />
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Ubicación</h3>
            <p style={{ color: 'var(--text-secondary)' }}>San Miguel de Tucumán, Tucumán, Argentina</p>
          </div>
        </div>

      </div>
    </main>
  );
}
