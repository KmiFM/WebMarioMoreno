import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      {/* Center Branding Overlay */}
      <div className={styles.centerBrand}>
        <h1 className={styles.centerName}>MARIO MORENO LAZARTE</h1>
      </div>

      {/* Art Split */}
      <Link href="/arte" className={`${styles.split} ${styles.artMode}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>Artes</h2>
          <p className={styles.subtitle}>Explorar Galería</p>
        </div>
      </Link>

      {/* Architecture Split */}
      <Link href="/arquitectura" className={`${styles.split} ${styles.archMode}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>Arquitectura</h2>
          <p className={styles.subtitle}>Ver Proyectos</p>
        </div>
      </Link>
    </main>
  );
}
