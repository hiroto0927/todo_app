import useCustomHook from "../hooks/useCustomhook";
import { CustomContext } from "./initial";

type TPropsCustom = {
  children: JSX.Element | JSX.Element[];
};

export default function CustomProvider(props: TPropsCustom) {
  return (
    <CustomContext.Provider value={useCustomHook()}>
      {props.children}
    </CustomContext.Provider>
  );
}
