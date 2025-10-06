import { Container } from '../../components/Container/index';
import { MainTemplate } from '../../templates/MainTemplate';
import { TrashIcon } from 'lucide-react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

import styles from './styles.module.css'
import { formatDate } from '../../utils/formatDate';
import { getTaskStatus } from '../../utils/getTaskStatus';

export function History() {
  const { state } = useTaskContext();

  return (
      <MainTemplate>
        <Container>
          <div className={styles['history-Header']}>
            <h1>History</h1>
            <span>
              <button aria-label='Apagar todo o Histórico' title='Apagar histórico' type='button' className={styles['history-Header-Button']}><TrashIcon color='white'/></button>
            </span>
          </div>
        </Container>

        <Container>
          <div className={styles.responsiveTable}>
            <table>
              <thead>
                <tr>
                  <th>Tarefa</th>
                  <th>Duração</th>
                  <th>Data</th>
                  <th>Status</th>
                  <th>Tipo</th>
                </tr>
              </thead>

              <tbody>
                {state.tasks.map(task => {
                  const taskTypeDicionary = {
                    workTime: 'Foco',
                    shortBreakTime: 'Descanso Curto',
                    longBreakTime: 'Descanso Longo'
                  }

                  return (
                <tr key={task.id}>
                  <td>{task.name}</td>
                  <td>{task.duration}min</td>
                  <td>{formatDate(task.startDate)}</td>
                  <td>{getTaskStatus(task, state.activeTask)}</td>
                  <td>{taskTypeDicionary[task.type]}</td>
                </tr>
                  )
                })}
              </tbody>
            </table>
            </div>
        </Container>
      </MainTemplate>
  );
}