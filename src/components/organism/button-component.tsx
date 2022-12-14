import { useContext } from "react";
import { CustomContext } from "../../lib/initial";
import ButtonUI from "../atoms/button";

export default function ButtonComponent() {
  const { setTask, data, task } = useContext(CustomContext);
  return (
    <div className=" flex pr-[33%] pl-[33%] justify-evenly mt-5">
      <ButtonUI.Blue
        onClick={(e) => {
          e.preventDefault();
          console.log(data);
          setTask([...task, data]);
          console.log(task);
        }}
      >
        Add
      </ButtonUI.Blue>

      <ButtonUI.Yellow onClick={() => {}}>Delete</ButtonUI.Yellow>
    </div>
  );
}
