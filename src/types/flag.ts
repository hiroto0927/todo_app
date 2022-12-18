import { Dispatch, SetStateAction } from "react";

export type Flag = {
  flag: boolean;
  setFlag: Dispatch<SetStateAction<boolean>>;
};
