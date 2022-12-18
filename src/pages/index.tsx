import type { NextPage } from "next";
import Template from "../components/template/template";
import ReducerProvider from "../provider/reducer-provider";

const Home: NextPage = () => {
  return (
    <div className=" bg-slate-100 h-[1240px] text-center font-mono">
      <ReducerProvider>
        <Template />
      </ReducerProvider>
    </div>
  );
};

export default Home;
