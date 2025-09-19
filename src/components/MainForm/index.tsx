import { PlayCircleIcon, StopCircleIcon } from "lucide-react"
import { Container } from "../Container"
import { Cycles } from "../Cycles"
import { DefaultButton } from "../DefaultButton"
import { DefaultInput } from "../DefaultInput"
import { useRef } from "react"
import type { TaskModel } from "../../models/TaskModel"
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext"
import { getNextCycle } from "../../utils/getNextCycle"
import { getNextCycleType } from "../../utils/getNextCycleType"
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions"
import { Tips } from "../Tips"

export function MainForm() {
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);
  const {} = useTaskContext();

  // ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);


  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim()

    if(!taskName) {
      alert ('Digite o nome da tarefa!')
      return
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptionDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    }

    dispatch({type: TaskActionTypes.START_TASK, payload: newTask})

  }

  function handleInterruptTask() {
    dispatch({type: TaskActionTypes.INTERRUPT_TASK})
  }

  return (
    <Container>
          <form onSubmit={handleCreateNewTask} className='form' action="">
            <div className='formRow'>
              <DefaultInput
              labelText='task'
              id='meuInput'
              type='text'
              placeholder='Ex: estudar pra prova'
              ref={taskNameInput}
              disabled={!!state.activeTask}
              />
            </div>

            <div className='formRow'>
              <Tips />
            </div>

          {state.currentCycle > 0 && (
            <div className='formRow'>
              <Cycles />
            </div>
          )}
          {!state.activeTask && (
          <DefaultButton
            aria-label='Iniciar nova tarefa'
            title='Iniciar nova tarefa'
            type='submit'
            icon={<PlayCircleIcon />}
            key={'botao_submit'}
          />
        )}

        {!!state.activeTask &&(
          <DefaultButton
            aria-label='Interromper tarefa atual'
            title='Interromper tarefa atual'
            type='button'
            color='red'
            onClick={handleInterruptTask}
            icon={<StopCircleIcon />}
            key={'botao_button'}
          />
        )}
          </form>
        </Container>
  )
}