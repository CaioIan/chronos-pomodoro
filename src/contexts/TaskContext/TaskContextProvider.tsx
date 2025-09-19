import { useEffect, useReducer} from "react";
import { TaskContext } from "./TaskContext";
import { initialTaskState } from "./initialTaskState";
import { taskReducer } from "./taskReducer";

type TaskProviderProps = {
  children: React.ReactNode
}

export function TaskContextProvider({ children }: TaskProviderProps) {
  const [state, dispatch] = useReducer (taskReducer, initialTaskState);

   useEffect(() => {
     console.log(state)
   }, [state])

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  )
}