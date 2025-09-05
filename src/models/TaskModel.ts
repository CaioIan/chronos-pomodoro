import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null; //quando o timer chega ao final
  interruptionDate: number | null; //quando a task é interrompida
  type: keyof TaskStateModel ['config'];
}