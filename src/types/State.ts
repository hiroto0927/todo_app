import { Dispatch, SetStateAction } from "react";

export type State = {
  data: string;
  setData: Dispatch<SetStateAction<string>>;
};
