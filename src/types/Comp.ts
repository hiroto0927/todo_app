import { Dispatch, SetStateAction } from "react";

export type TComp = {
  comp: string[];
  setComp: Dispatch<SetStateAction<string[]>>;
};
