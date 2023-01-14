import { createContext, useReducer } from "react";
import { reducer, State } from "../lib/reducer";

const initialState: State = {
  task: [],
  nextId: 1,
};

export default function useCustomReducer() {
  const [rstate, dispatch] = useReducer(reducer, initialState);

  return { rstate, dispatch };
}

const initial_reducer: ReturnType<typeof useCustomReducer> = {
  rstate: {
    task: [],
    nextId: 1,
  },
  dispatch: () => {},
};

export const ReducerContext = createContext(initial_reducer);
