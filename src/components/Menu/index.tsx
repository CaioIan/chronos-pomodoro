import { HistoryIcon, House, MoonIcon, Settings, Sun } from "lucide-react";
import { data, Link } from "react-router-dom";
import styles from './Menu.module.css';
import { useState, useEffect } from "react";

type AvailableThemes = 'dark' | 'light';

export function Menu() {

  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
    localStorage.getItem('theme') as AvailableThemes || 'dark';
    return storageTheme;
  });

  const setThemeIcon = {
    dark: <Sun />,
    light: <MoonIcon />
  }

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

    useEffect(() => {
      console.log('Theme mudou para', theme, Date.now());
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      return () => {
        console.log('Este componente será atualizado', Date.now());
      }
    },[theme]); //Executa apenas quando o valor de theme muda

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
        {setThemeIcon[theme]}
      </Link>
    </div>
  );
}
