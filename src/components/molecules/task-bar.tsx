import { ChangeEvent, useContext } from "react";
import { Mycontext } from "../../lib/provider";

const TaskBar = () => {
  const { data, setData } = useContext(Mycontext);

  return (
    <div className=" flex pt-10 ">
      <div className="block text-gray-700 text-4xl font-bold w-1/3 text-right pr-5">
        Todo :
      </div>
      <div className="w-2/3 pr-80">
        <textarea
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight w-full "
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            setData(e.target.value);
          }}
        ></textarea>
      </div>
    </div>
  );
};

export default TaskBar;
