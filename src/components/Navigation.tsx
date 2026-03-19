import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import styles from './Navigation.module.css';

export default function Navigation() {
  const artCategories = [
    "Todos",
    "Modelado 3d",
    "Renders",
    "Prueba de materiales e iluminación",
    "Prueba de montaje",
    "Especificaciones técnicas",
    "Documentacion técnica",
    "Animación"
  ];

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        MARIO MORENO LAZARTE
      </Link>
      <div className={styles.links}>
        
        {/* Dropdown Arte */}
        <div className={styles.dropdownContainer}>
          <Link href="/arte" className={styles.linkButton} style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
            Arte <ChevronDown size={14} />
          </Link>
          <div className={styles.dropdownMenu}>
            {artCategories.map(cat => (
              <Link 
                key={cat} 
                href={cat === "Todos" ? "/arte" : `/arte?filter=${encodeURIComponent(cat)}`} 
                className={styles.dropdownItem}
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>

        <Link href="/arquitectura" className={styles.linkButton}>Arquitectura</Link>
        <Link href="/cv" className={styles.linkButton}>CV</Link>
        <Link href="/blog" className={styles.linkButton}>Blog</Link>
        <Link href="/contacto" className={styles.linkButton}>Contacto</Link>
      </div>
    </nav>
  );
}
