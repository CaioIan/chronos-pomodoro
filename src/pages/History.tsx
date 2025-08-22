import { useState } from 'react';
import { House, History as HistoryIcon, TimerIcon, Sun, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from '../styles/containers.module.css'; // Importando o CSS Module para estilos específicos
import { Button } from '../components/Button';

export function History() {
  const [hover, setHover] = useState(false);
  // Defina a cor do ícone conforme o hover
  const headerIconColor = hover ? '#07694d' : '#0da170';
  const headerTextColor = hover ? '#07694d' : '#0da170';
  const iconColorMenu = 'black';

  return (
    <div className={styles.container}>
      <Link
        to="/"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "48pt",
          color: headerTextColor,
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <TimerIcon size={72} color={headerIconColor} /> {/* cor do ícone */}
        <span>Chronos</span>
      </Link>

      <div className={styles.containerMenu}>
        <Link to="/">
          <Button>
            <House color={iconColorMenu} />
          </Button>
        </Link>

        <Link to="/history">
        <Button>
          <HistoryIcon color={iconColorMenu} />
        </Button>
        </Link>

        <Button>
          <Settings color={iconColorMenu} />
        </Button>

        <Button>
          <Sun color={iconColorMenu} />
        </Button>
      </div>
    </div>
  );
}