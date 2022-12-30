import { useReducer } from "react";
import { reducer, State } from "../lib/reducer";

const initialState: State = {
  task: [],
  nextId: 1,
};

export default function useCustomReducer() {
  const [rstate, dispatch] = useReducer(reducer, initialState);

  return { rstate, dispatch };
}
