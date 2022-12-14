import { ChangeEvent, useContext } from "react";
import { CustomContext } from "../../lib/initial";

const TaskBar = () => {
  // const { setData } = useContext(Mycontext);
  const { data, setData } = useContext(CustomContext);

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
            console.log(data);
          }}
        ></textarea>
      </div>
    </div>
  );
};

export default TaskBar;
