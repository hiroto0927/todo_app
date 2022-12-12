import { Dispatch, SetStateAction } from "react";

export type TTask = {
  task: string[];
  setTask: Dispatch<SetStateAction<string[]>>;
};
