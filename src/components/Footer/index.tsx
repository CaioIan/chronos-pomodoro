import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to={'/about-pomodoro'} className={styles.footerLink}>Entenda a técnica pomodoro ⌛</Link>
      <Link to={'/'} className={styles.footerLink}>Chronos Pomodoro  &copy; {new Date().getFullYear()} - Feito com 💚</Link>
    </footer>
  );
}