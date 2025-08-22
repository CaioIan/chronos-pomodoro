import { TimerIcon } from 'lucide-react';
import styles from './Header.module.css'; // Importando o CSS Module para estilos específicos
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <div className={styles.logo}>
      <Link to="/" className={styles.logoLink}>
        <TimerIcon />
        <span>Chronos</span>
      </Link>
    </div>
  );
}
