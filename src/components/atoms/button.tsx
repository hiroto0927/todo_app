import { MouseEventHandler } from "react";

const ButtonUI = () => {};

type TPropsButton = {
  children: React.ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Blue = (props: TPropsButton) => {
  return (
    <button className="btn btn-outline btn-info" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

const Green = (props: TPropsButton) => {
  return (
    <button className="btn btn-outline btn-success" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

const Yellow = (props: TPropsButton) => {
  return (
    <button className="btn btn-outline btn-warning" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

ButtonUI.Blue = Blue;
ButtonUI.Green = Green;
ButtonUI.Yellow = Yellow;

export default ButtonUI;
