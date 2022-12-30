import { TTaskState } from "../../types/task-state";
import Card from "../atoms/card";

type TPropsTaskList = {
  label: string;
  task: TTaskState[];
  completed: boolean;
};

export default function TaskList(props: TPropsTaskList) {
  return (
    <>
      <div className=" mb-5 text-4xl ">{props.label}</div>

      {props.task.map((task) => {
        if (task.flag === props.completed) {
          return (
            <div key={task.id} className="mt-5 mb-5 pl-[25%] pr-[25%]">
              <Card id={task.id} flag={task.flag}>
                {task.data}
              </Card>
            </div>
          );
        }
      })}
    </>
  );
}
