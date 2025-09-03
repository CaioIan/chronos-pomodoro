import styles from './CountDown.module.css'; // Importando o CSS Module para estilos específicos

export function CountDown() {
  return (
    <div className={styles.container}>
      <div className={styles.countdownValue}>00:00</div>
    </div>
  );
}
