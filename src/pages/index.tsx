import { useState } from 'react';
import { House, History, TimerIcon, Sun, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './containers.module.css';
import { Button } from '../components/ui/Button';

export function Index() {
  const [hover, setHover] = useState(false);
  // Defina a cor do ícone conforme o hover
  const iconColor = hover ? '#07694d' : '#0da170';
  const textColor = hover ? '#07694d' : '#0da170';

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
            color: textColor,
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <TimerIcon size={72} color={iconColor} /> {/* cor do ícone */}
          <span>Chronos</span>
        </Link>

        <div className={styles.containerMenu}>
        <Button>
          <House size={24} />
        </Button>

        <Button>
          <History />
        </Button>

        <Button>
          <Settings />
        </Button>

        <Button>
          <Sun />
        </Button>
        </div>
      </div>
  );
}