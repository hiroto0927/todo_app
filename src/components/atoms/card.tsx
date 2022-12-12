import { Console } from "console";
import React, { useContext } from "react";
import { useState } from "react";
import { CompContext, TaskContext } from "../../lib/provider";

type TPropsCard = {
  children: React.ReactNode | JSX.Element | JSX.Element[];
};

const Card = (props: TPropsCard) => {
  const [flag, setFlag] = useState<boolean>(false);
  const { task, setTask } = useContext(TaskContext);
  const { comp, setComp } = useContext(CompContext);

  return (
    <div className="card w-96 bg-base-100 shadow-xl h-[100px]">
      <div className=" flex mt-auto mb-auto ml-5 ">
        <input
          type="checkbox"
          checked={flag}
          className="checkbox mr-5"
          onChange={() => {
            setFlag(!flag);
            if (flag === true) {
              console.log("--------TRUE---------");
            } else {
              console.log("--------FALSE---------");
              setTask((prevState) =>
                prevState.filter((value) => value !== props.children)
              );
            }
          }}
        />
        <div className="">{props.children}</div>
      </div>
    </div>
  );
};

export default Card;