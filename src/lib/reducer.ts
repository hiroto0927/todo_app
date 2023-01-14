import { TTaskState } from "../types/task-state";
import _ from "lodash";

export type State = {
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
          {
            id: state.nextId,
            text_data: action.payload.taskName,
            check_flag: false,
          },
        ],
      };
    case "check":
      for (const task of task_data) {
        if (task.id === action.payload.id) {
          task.check_flag = !task.check_flag;
          break;
        }
      }

      return {
        task: task_data,
        nextId: state.nextId,
      };

    case "delete_task":
      return {
        task: task_data.filter((task) => task.check_flag === false),
        nextId: state.nextId,
      };
  }
};
