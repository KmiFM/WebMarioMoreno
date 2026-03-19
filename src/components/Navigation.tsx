import Link from 'next/link';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        MARIO MORENO LAZARTE
      </Link>
      <div className={styles.links}>
        <Link href="/arte" className={styles.linkButton}>Arte</Link>
        <Link href="/arquitectura" className={styles.linkButton}>Arquitectura</Link>
        <Link href="/cv" className={styles.linkButton}>CV</Link>
        <Link href="/blog" className={styles.linkButton}>Blog</Link>
      </div>
    </nav>
  );
}
