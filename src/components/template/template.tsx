import { useContext } from "react";
import { CustomContext } from "../../lib/initial";
import Card from "../atoms/card";
import TaskBar from "../molecules/task-bar";
import ButtonComponent from "../organism/button-component";

export default function Template() {
  const { task } = useContext(CustomContext);

  return (
    <div>
      <TaskBar />

      <ButtonComponent />

      <div className="  mt-5">
        <div className="flex justify-evenly ">
          <div>
            <div className=" mb-5 text-4xl ">Waiting</div>
            {task.map((task, i) => {
              return (
                <div key={i} className="mt-5 mb-5">
                  <Card>{task}</Card>
                </div>
              );
            })}
          </div>
          <ul className=" border-[2px] border-slate-400"></ul>
          <div>
            <div className=" mb-5 text-4xl ">Complete</div>
            <Card>task</Card>
          </div>
        </div>
      </div>
    </div>
  );
}
