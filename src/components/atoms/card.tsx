import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { ReducerContext } from "../../lib/initial-reducer";

type TPropsCard = {
  children: React.ReactNode | JSX.Element | JSX.Element[];
  id: number;
  flag: boolean;
};

const Card = (props: TPropsCard) => {
  const [flag, setFlag] = useState(props.flag);
  const { dispatch } = useContext(ReducerContext);
  const [id, setId] = useState<number>(0);

  useEffect(() => {
    setId(props.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="card w-96 bg-base-100 shadow-xl h-[100px]">
      <div className=" flex mt-auto mb-auto ml-5 ">
        <input
          type="checkbox"
          checked={flag}
          className="checkbox mr-5"
          onChange={() => {
            setFlag(!flag);
            console.log(id);
            if (flag === false) {
              dispatch({ type: "check", payload: { id: id } });
            } else if (flag === true) {
              dispatch({ type: "uncheck", payload: { id: id } });
            }
          }}
        />
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default Card;
