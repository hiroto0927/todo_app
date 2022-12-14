import { createContext, SetStateAction } from "react";
import useCustomHook from "../hooks/useCustomhook";

const useCustomProvider: ReturnType<typeof useCustomHook> = {
  data: "",
  setData: () => {},
  task: [],
  setTask: () => {},
  comp: [],
  setComp: () => {},
};

export const CustomContext = createContext(useCustomProvider);
