import type { NextPage } from "next";
import { createContext, useState } from "react";
import ButtonUI from "../components/atoms/button";
import Card from "../components/atoms/card";
import TaskBar from "../components/molecules/task-bar";
import { CompContext, Mycontext, TaskContext } from "../lib/provider";

const Home: NextPage = () => {
  const [data, setData] = useState<string>("");
  const [task, setTask] = useState<string[]>([]);
  const [comp, setComp] = useState<string[]>([]);

  return (
    <div className=" bg-slate-100 h-[1240px] text-center font-mono">
      <button onClick={(e) => {}}></button>
      <Mycontext.Provider value={{ data, setData }}>
        <TaskBar />
      </Mycontext.Provider>
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
      <div className="  mt-5">
        <CompContext.Provider value={{ comp, setComp }}>
          <TaskContext.Provider value={{ task, setTask }}>
            <div className="flex justify-evenly ">
              <div>
                <div className=" mb-5 text-4xl ">Waiting</div>
                {task.map((task, i) => {
                  return (
                    <div key={i} className="mt-5 mb-5">
                      <Card>{task}</Card>
                    </div>
                  );
                })}
              </div>
              <ul className=" border-[2px] border-slate-400"></ul>
              <div>
                <div className=" mb-5 text-4xl ">Complete</div>
                <Card>task</Card>
              </div>
            </div>
          </TaskContext.Provider>
        </CompContext.Provider>
      </div>
    </div>
  );
};

export default Home;
