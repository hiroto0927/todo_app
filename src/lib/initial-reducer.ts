import { createContext } from "react";
import useCustomReducer from "../hooks/useCustomReducer";

const reducer: ReturnType<typeof useCustomReducer> = {
  rstate: {
    task: [],
    comp: [],
  },
  dispatch: () => {},
};

export const ReducerContext = createContext(reducer);
