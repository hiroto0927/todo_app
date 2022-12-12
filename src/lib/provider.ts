import { createContext } from "react";
import { TComp } from "../types/Comp";
import { State } from "../types/State";
import { TTask } from "../types/Task";

const initial: State = {
  data: "",
  setData: () => {},
};

const initialTask: TTask = {
  task: [],
  setTask: () => {},
};

const initialComp: TComp = {
  comp: [],
  setComp: () => {},
};

export const Mycontext = createContext(initial);
export const TaskContext = createContext(initialTask);
export const CompContext = createContext(initialComp);
