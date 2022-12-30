import { createContext } from "react";
import useCustomReducer from "../hooks/useCustomReducer";

const reducer: ReturnType<typeof useCustomReducer> = {
  rstate: {
    task: [],
    nextId: 1,
  },
  dispatch: () => {},
};

export const ReducerContext = createContext(reducer);
