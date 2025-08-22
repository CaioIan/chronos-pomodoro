import { HistoryIcon, House, Settings, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import styles from './Menu.module.css'; // Importando o CSS Module para estilos específicos

export function Menu() {

  return (
    <div className={styles.menu}>
      <Link to="/" className={styles.menuLink}>
          <House />
      </Link>

      <Link to="/history" className={styles.menuLink}>
          <HistoryIcon />
      </Link>

      <Link to="/settings" className={styles.menuLink}>
          <Settings />
      </Link>

      <Link to="/sun" className={styles.menuLink}>
        <Sun />
      </Link>
    </div>
  );
}
