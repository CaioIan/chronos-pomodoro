import { TrashIcon } from 'lucide-react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { useEffect, useState } from 'react';
import { sortTasks, type SortTasksOptions } from '../../utils/sortTasks';

import styles from './styles.module.css'
import { MainTemplate } from '../../templates/MainTemplate';
import { Container } from '../../components/Container';
import { formatDate } from '../../utils/formatDate';
import { getTaskStatus } from '../../utils/getTaskStatus';
import { showMessage } from '../../adapters/showAlert';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';

export function History() {
  const { state, dispatch } = useTaskContext();
  const hasTasks = state.tasks.length > 0;
  const [confirmClearHistory, setConfirmClearHistory] = useState(false)

  const [sortTasksOptions, setSortTaskOptions] = useState<SortTasksOptions>(() => {
    return {
      tasks: sortTasks({tasks: state.tasks}),
      field: 'startDate',
      direction: 'desc',
    }
  });

  useEffect(() => {
    return () => {
      showMessage.dismiss();
    };
  }, []);


  function handleSortTasks({field}: Pick<SortTasksOptions, 'field'>) {
    const newDirection = sortTasksOptions.direction === 'desc' ? 'asc' : 'desc'

    setSortTaskOptions({
      tasks: sortTasks ({
        direction: newDirection,
        tasks: sortTasksOptions.tasks,
        field,
      }),
      direction: newDirection,
      field,
    })
  }

  useEffect(() => {
    setSortTaskOptions(prevState => ({
      ...prevState,
      tasks: sortTasks({
        tasks: state.tasks,
        direction: prevState.direction,
        field: prevState.field,
      }),
    }));
  }, [state.tasks]);

    useEffect(() => {
    document.title = 'Histórico - Tempus Pomodoro';
  }, []);

  useEffect(() => {
    if(!confirmClearHistory) return;
    setConfirmClearHistory(false)

    dispatch({ type: TaskActionTypes.RESET_STATE });
  }, [confirmClearHistory, dispatch])

  function handleResetHistory() {
    showMessage.dismiss()
    showMessage.confirm('Tem certeza que deseja apagar seu histórico de tarefas?', (confirmation) => {
      setConfirmClearHistory(confirmation)
    })
  }


  return (
      <MainTemplate>
        <Container>
          <div className={styles['history-Header']}>
            <h1>History</h1>
            {hasTasks && (
              <button
              aria-label='Apagar todo o Histórico'
              title='Apagar histórico'
              type='button'
              className={styles['history-Header-Button']}
              onClick={handleResetHistory}
              >
              <TrashIcon color='white'/>
              </button>
            )}
          </div>
        </Container>

        <Container>
          {hasTasks && (
          <div className={styles.responsiveTable}>
            <table>
              <thead>
                <tr>
                  <th onClick={() => handleSortTasks({field: 'name'})} className={styles.thSort}>
                    Tarefa ↕
                    </th>

                  <th onClick={() => handleSortTasks({field: 'duration'})} className={styles.thSort}>
                    Duração ↕
                    </th>

                  <th onClick={() => handleSortTasks({field: 'startDate'})} className={styles.thSort}>
                    Data ↕
                    </th>
                  <th>Status</th>
                  <th>Tipo</th>
                </tr>
              </thead>

              <tbody>
                {sortTasksOptions.tasks.map(task => {
                  const taskTypeDictionary = {
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
                  <td>{taskTypeDictionary[task.type]}</td>
                </tr>
                  )
                })}
              </tbody>
            </table>
            </div>
          )}

          {!hasTasks && (
            <p style={{textAlign: 'center', fontSize: '16pt', fontWeight: 'bold' }}>
              Ainda não existem tarefas criadas
            </p>
          )}
        </Container>
      </MainTemplate>
  );
}