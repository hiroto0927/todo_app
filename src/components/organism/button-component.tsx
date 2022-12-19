import { useContext } from "react";
import {
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import { ReducerContext } from "../../lib/initial-reducer";
import { rand } from "../../lib/random";
import { TTaskState } from "../../types/task-state";
import ButtonUI from "../atoms/button";

type TPropsTask = {
  register: UseFormRegister<TTaskState>;
  handleSubmit: UseFormHandleSubmit<TTaskState>;
  watch: UseFormWatch<TTaskState>;
};

export default function ButtonComponent(props: TPropsTask) {
  const { dispatch } = useContext(ReducerContext);

  return (
    <div className=" flex pr-[33%] pl-[33%] justify-evenly mt-5">
      <ButtonUI.Blue
        onClick={() => {
          const data: TTaskState = {
            id: rand(1, 10000),
            data: props.watch("data"),
          };

          dispatch({ type: "genelate_task", payload: { data: data } });
        }}
      >
        Add
      </ButtonUI.Blue>

      <ButtonUI.Yellow
        onClick={() => {
          dispatch({ type: "delete_task" });
        }}
      >
        Delete
      </ButtonUI.Yellow>
    </div>
  );
}
