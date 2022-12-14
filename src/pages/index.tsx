import type { NextPage } from "next";
import Template from "../components/template/template";
import CustomProvider from "../lib/provider";

const Home: NextPage = () => {
  return (
    <div className=" bg-slate-100 h-[1240px] text-center font-mono">
      <CustomProvider>
        <Template />
      </CustomProvider>
    </div>
  );
};

export default Home;
