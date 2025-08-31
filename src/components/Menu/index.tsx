import { HistoryIcon, House, Settings, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import styles from './Menu.module.css'; // Importando o CSS Module para estilos específicos
import { useState } from "react";

type AvailableThemes = 'dark' | 'light';

export function Menu() {

  const [theme, setTheme] = useState<AvailableThemes>('dark');

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();
    console.log('Clicado', Date.now());
  }

  return (
    <div className={styles.menu}>
      <Link
      to="/"
      className={styles.menuLink}
      aria-label='Ir para a página inicial'
      title="Ir para a página inicial"
      >
          <House />
      </Link>

      <Link
      to="/history"
      className={styles.menuLink}
      aria-label='Ver Histórico'
      title="Ver Histórico"
      >
          <HistoryIcon />
      </Link>

      <Link
      to="/settings"
      className={styles.menuLink}
      aria-label='Ver configurações'
      title="Ver configurações"
      >
          <Settings />
      </Link>

      <Link
      to="/sun"
      className={styles.menuLink}
      aria-label='Mudar tema'
      title="Mudar tema"
      onClick={handleThemeChange}
      >
        <Sun />
      </Link>
    </div>
  );
}
