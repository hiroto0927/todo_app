import {
  UseFormRegister,
  UseFormHandleSubmit,
  FormState,
  UseFormWatch,
  SubmitHandler,
} from "react-hook-form";
import { TTaskState } from "../../types/task-state";

type TTaskBar = {
  register: UseFormRegister<TTaskState>;
  handleSubmit: UseFormHandleSubmit<TTaskState>;
  formState: FormState<TTaskState>;
  watch: UseFormWatch<TTaskState>;
};

const onSubmit: SubmitHandler<TTaskState> = (data: any) => {
  console.log(data);
};

const TaskBar = (props: TTaskBar) => {
  return (
    <div className=" flex pt-10 ">
      <div className="block text-gray-700 text-4xl font-bold w-1/3 text-right pr-5">
        Todo :
      </div>
      <form className="w-2/3 pr-[15%]" onSubmit={props.handleSubmit(onSubmit)}>
        <input
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight w-full "
          {...props.register("data")}
        />
        {props.formState.errors.data && (
          <span style={{ color: "red" }}>This field is required</span>
        )}
      </form>
    </div>
  );
};

export default TaskBar;
