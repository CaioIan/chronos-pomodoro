import { HistoryIcon, House, MoonIcon, Settings, Sun } from "lucide-react";
import styles from './Menu.module.css';
import { useState, useEffect, type JSX } from "react";
import { RouterLink } from "../RouterLink";

type AvailableThemes = 'dark' | 'light';

export function Menu() {

  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
    localStorage.getItem('theme') as AvailableThemes || 'dark';
    return storageTheme;
  });

  // console.log('Iniciando tema', theme);

  const setThemeIcon: JSX.Element = {
    dark: <Sun />,
    light: <MoonIcon />
  }[theme] ?? <Sun />

  function handleThemeChange() {
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
      <RouterLink
      to="/"
      className={styles.menuLink}
      aria-label='Ir para a página inicial'
      title="Ir para a página inicial"
      >
      <House />
      </RouterLink>

      <RouterLink
      to="/history"
      className={styles.menuLink}
      aria-label='Ver Histórico'
      title="Ver Histórico"
      >
      <HistoryIcon />
      </RouterLink>

      <RouterLink
      to="/settings"
      className={styles.menuLink}
      aria-label='Ver configurações'
      title="Ver configurações"
      >
      <Settings />
      </RouterLink>

      <div
      className={styles.menuLink}
      aria-label='Mudar tema'
      title="Mudar tema"
      onClick={handleThemeChange}
      >
        {setThemeIcon}
      </div>
    </div>
  );
}
