import { useContext } from "react";
import TaskBar from "../molecules/task-bar";
import { ReducerContext } from "../../lib/initial-reducer";
import ButtonUI from "../atoms/button";
import TaskList from "../organism/taskList";

export default function Template() {
  const { dispatch } = useContext(ReducerContext);

  const { rstate } = useContext(ReducerContext);

  return (
    <div>
      <TaskBar />

      <div className="  mt-5 bg-slate-100">
        <div className="flex justify-end w-full px-10">
          <ButtonUI.Yellow
            onClick={() => {
              dispatch({ type: "delete_task" });
            }}
          >
            ALL Delete
          </ButtonUI.Yellow>
        </div>

        <div className="flex ">
          <div className=" w-1/2">
            <TaskList tasks={rstate.task} label="Waiting" completed={false} />
          </div>

          <ul className=" border-[2px] border-slate-400"></ul>

          <div className=" w-1/2">
            <TaskList tasks={rstate.comp} label="Complete" completed />
          </div>
        </div>
      </div>
    </div>
  );
}
