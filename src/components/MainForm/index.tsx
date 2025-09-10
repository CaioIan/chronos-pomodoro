import { PlayCircleIcon } from "lucide-react"
import { Container } from "../Container"
import { Cycles } from "../Cycles"
import { DefaultButton } from "../DefaultButton"
import { DefaultInput } from "../DefaultInput"
import { useRef } from "react"
import type { TaskModel } from "../../models/TaskModel"
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext"
import { getNextCycle } from "../../utils/getNextCycle"
import { getNextCycleType } from "../../utils/getNextCycleType"
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes"

export function MainForm() {
  const { state, setState } = useTaskContext();
  const {} = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);
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

    console.log(taskName, Date.now())

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptionDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    }

    const secondsRemaining = newTask.duration * 60

    setState(prevState => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle, // Conferir depois
        secondsRemaining: secondsRemaining, // Conferir depois
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining), //Conferir depois
        tasks: [...prevState.tasks, newTask],
      }
    })
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
              />
            </div>

            <div className='formRow'>
              <p>O próximo intervalo será de 1000 anos</p>
            </div>

            <div className='formRow'>
              <Cycles />
            </div>

            <DefaultButton icon={<PlayCircleIcon />} />
          </form>
        </Container>
  )
}