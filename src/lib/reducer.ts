import { TTaskState } from "../types/task-state";
import _ from "lodash";

export type State = {
  task: TTaskState[];
  comp: TTaskState[];
};

export type Action =
  | {
      type: "genelate_task";
      payload: {
        data: TTaskState;
      };
    }
  | {
      type: "check";
      payload: {
        id: number;
      };
    }
  | {
      type: "uncheck";
      payload: {
        id: number;
      };
    }
  | {
      type: "delete_task";
    };

export const reducer = (state: State, action: Action): State => {
  const task_data = _.cloneDeep(state.task);
  const comp_data = _.cloneDeep(state.comp);

  switch (action.type) {
    case "genelate_task":
      if (action.payload.data.data !== "") {
        return {
          task: [...state.task, action.payload.data],
          comp: [...state.comp],
        };
      } else {
        return {
          task: [...state.task],
          comp: [...state.comp],
        };
      }

    case "check":
      for (let i = 0; i < state.task.length; i++) {
        if (state.task[i].id === action.payload.id) {
          task_data.splice(i, 1);
          comp_data.push(state.task[i]);
          break;
        }
      }

      return {
        task: task_data,
        comp: comp_data,
      };

    case "uncheck":
      for (let i = 0; i < state.comp.length; i++) {
        if (state.comp[i].id === action.payload.id) {
          comp_data.splice(i, 1);
          task_data.push(state.comp[i]);
          break;
        }
      }
      return {
        task: task_data,
        comp: comp_data,
      };

    case "delete_task":
      // comp_data.splice(0);
      // console.log(comp_data);
      return { task: state.task, comp: [] };
  }
};
