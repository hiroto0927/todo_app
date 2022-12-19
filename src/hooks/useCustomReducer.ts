import { useReducer } from "react";
import { reducer } from "../lib/reducer";

const initialState = {
  task: [],
  comp: [],
};

export default function useCustomReducer() {
  const [rstate, dispatch] = useReducer(reducer, initialState);

  return { rstate, dispatch };
}
