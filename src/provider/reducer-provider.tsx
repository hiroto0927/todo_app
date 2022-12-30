import useCustomReducer, { ReducerContext } from "../hooks/useCustomReducer";

type TPropsReducer = {
  children: JSX.Element | JSX.Element[];
};

export default function ReducerProvider(props: TPropsReducer) {
  return (
    <ReducerContext.Provider value={useCustomReducer()}>
      {props.children}
    </ReducerContext.Provider>
  );
}
