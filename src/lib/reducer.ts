import { TTaskState } from "../types/task-state";
import _ from "lodash";

type State = {
  nextId: number;
  task: TTaskState[];
};

export type Action =
  | {
      type: "genelate_task";
      payload: {
        taskName: string;
      };
    }
  | {
      type: "check";
      payload: {
        id: number;
      };
    }
  | {
      type: "delete_task";
    };

export const reducer = (state: State, action: Action): State => {
  const task_data = _.cloneDeep(state.task);

  switch (action.type) {
    case "genelate_task":
      return {
        nextId: state.nextId + 1,
        task: [
          ...state.task,
          { id: state.nextId, data: action.payload.taskName, flag: false },
        ],
      };
    case "check":
      for (let i = 0; i < state.task.length; i++) {
        if (state.task[i].id === action.payload.id) {
          task_data[i].flag = !task_data[i].flag;

          break;
        }
      }

      return {
        task: task_data,
        nextId: state.nextId,
      };

    case "delete_task":
      console.log(state.task.length);
      for (let i = state.task.length - 1; i >= 0; i--) {
        if (task_data[i].flag === true) {
          task_data.splice(i, 1);
        }
      }

      return { task: task_data, nextId: state.nextId };
  }
};
