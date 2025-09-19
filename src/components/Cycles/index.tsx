import styles from './Cycles.module.css'
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { getNextCycle } from '../../utils/getNextCycle';

export function Cycles() {
  const { state } = useTaskContext()

  const cycleSteps = Array.from({ length: state.currentCycle });
  const cycleDescriptionMap = {
    workTime: 'foco',
    shortBreakTime: 'descanso curto',
    longBreakTime: 'descanso longo'
  }

  console.log(cycleSteps)

  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>
      <div className={styles.cycleDots}>
        {cycleSteps.map((_, index) => {
          const nextCycle = getNextCycle(index)
          const nextCycleType = getNextCycleType(nextCycle)
          
          return <span
          key={nextCycleType}
          className={`${styles.cycleDot} ${styles[nextCycleType]}`}
          aria-label={`Indicador de Ciclo de ${cycleDescriptionMap[nextCycleType]}`}
          title={`Indicador de Ciclo de ${cycleDescriptionMap[nextCycleType]}`}
          >
          </span>;
        })}
        {/* <span className={`${styles.cycleDot} ${styles.workTime}`}></span> */}
      </div>
    </div>
  );
}
