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
import { FlagContext } from "../template/template";

type TPropsTask = {
  register: UseFormRegister<TTaskState>;
  handleSubmit: UseFormHandleSubmit<TTaskState>;
  watch: UseFormWatch<TTaskState>;
};

export default function ButtonComponent(props: TPropsTask) {
  const { rstate, dispatch } = useContext(ReducerContext);
  const { flag, setFlag } = useContext(FlagContext);
  return (
    <div className=" flex pr-[33%] pl-[33%] justify-evenly mt-5">
      <ButtonUI.Blue
        onClick={() => {
          const data: TTaskState = {
            id: rand(1, 10000),
            data: props.watch("data"),
          };

          dispatch({ type: "genelate_task", payload: { data: data } });
          console.log(rstate.task);
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
