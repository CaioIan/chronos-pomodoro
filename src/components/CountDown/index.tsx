import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import styles from './CountDown.module.css'; // Importando o CSS Module para estilos específicos


export function CountDown() {
  const {state} = useTaskContext();

  return (
    <div className={styles.container}>
      <div className={styles.countdownValue}>{state.formattedSecondsRemaining}</div>
    </div>
  );
}
