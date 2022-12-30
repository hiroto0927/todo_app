import { useContext } from "react";
import { SubmitHandler } from "react-hook-form";
import ButtonUI from "../atoms/button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../hooks/react-hook-form/schema";
import { ReducerContext } from "../../hooks/useCustomReducer";

const TaskBar = () => {
  const { dispatch } = useContext(ReducerContext);
  const { register, handleSubmit, formState } = useForm<{ taskName: string }>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<{ taskName: string }> = (data: any) => {
    dispatch({ type: "genelate_task", payload: { taskName: data.taskName } });
  };

  return (
    <div className=" flex pt-10 ">
      <div className="block text-gray-700 text-4xl font-bold w-1/3 text-right pr-5">
        Todo :
      </div>
      <form
        className="flex w-2/3 pr-[15%] items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-3/4">
          <input
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight w-full "
            {...register("taskName")}
          />

          {formState.errors.taskName && (
            <span style={{ color: "red" }}>
              {formState.errors.taskName.message}
            </span>
          )}
        </div>

        <div className="w-1/4 px-1">
          <ButtonUI.Blue type="submit">ADD</ButtonUI.Blue>
        </div>
      </form>
    </div>
  );
};

export default TaskBar;
