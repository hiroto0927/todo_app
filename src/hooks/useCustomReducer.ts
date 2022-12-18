import { useReducer } from "react";
import { reducer } from "../lib/reducer";

export default function useCustomReducer() {
  const [rstate, dispatch] = useReducer(reducer, initialState);

  return { rstate, dispatch };
}

const initialState = {
  task: [],
  comp: [],
};
