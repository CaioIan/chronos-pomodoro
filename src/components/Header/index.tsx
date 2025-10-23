import { TimerIcon } from 'lucide-react';
import styles from './Header.module.css'; // Importando o CSS Module para estilos específicos
import { RouterLink } from '../RouterLink';

export function Header() {
  return (
    <div className={styles.logo}>
      <RouterLink to="/" className={styles.logoLink}>
        <TimerIcon />
        <span>Tempus</span>
      </RouterLink>
    </div>
  );
}
