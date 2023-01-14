import React, { useContext } from "react";
import { ReducerContext } from "../../hooks/useCustomReducer";

type TPropsCard = {
  children: React.ReactNode | JSX.Element | JSX.Element[];
  id: number;
  flag: boolean;
};

const Card = (props: TPropsCard) => {
  const { dispatch } = useContext(ReducerContext);

  return (
    <div className="card w-auto bg-base-100 shadow-xl h-[100px]">
      <div className=" flex mt-auto mb-auto ml-5 ">
        <input
          type="checkbox"
          checked={props.flag}
          className="checkbox mr-5"
          onChange={() => {
            dispatch({ type: "check", payload: { id: props.id } });
          }}
        />
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default Card;
