import styles from './Footer.module.css';
import { RouterLink } from '../RouterLink';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink to={'/about-pomodoro'} className={styles.footerLink}>Entenda a técnica pomodoro ⌛</RouterLink>
      <RouterLink to={'/'} className={styles.footerLink}>Chronos Pomodoro  &copy; {new Date().getFullYear()} - Feito com 💚</RouterLink>
    </footer>
  );
}