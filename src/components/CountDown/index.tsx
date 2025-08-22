import styles from './CountDown.module.css'; // Importando o CSS Module para estilos específicos

export function CountDown() {
  return (
    <div className={styles.container}>
      <h1>00:00</h1>
    </div>
  );
}
