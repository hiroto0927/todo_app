import { createContext, useContext, useState } from "react";
import Card from "../atoms/card";
import TaskBar from "../molecules/task-bar";
import ButtonComponent from "../organism/button-component";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../types/schema";
import { TTaskState } from "../../types/task-state";
import { ReducerContext } from "../../lib/initial-reducer";

export default function Template() {
  const { register, handleSubmit, formState, watch } = useForm<TTaskState>({
    resolver: yupResolver(schema),
  });

  const { rstate } = useContext(ReducerContext);

  return (
    <div>
      <TaskBar
        register={register}
        handleSubmit={handleSubmit}
        formState={formState}
        watch={watch}
      />

      <ButtonComponent
        register={register}
        handleSubmit={handleSubmit}
        watch={watch}
      />

      <div className="  mt-5">
        <div className="flex justify-evenly ">
          <div>
            <div className=" mb-5 text-4xl ">Waiting</div>
            {rstate.task.map((task) => {
              return (
                <div key={task.id} className="mt-5 mb-5">
                  <Card id={task.id} flag={false}>
                    {task.data}
                  </Card>
                </div>
              );
            })}
          </div>
          <ul className=" border-[2px] border-slate-400"></ul>
          <div>
            <div className=" mb-5 text-4xl ">Complete</div>
            {rstate.comp.map((comp) => {
              return (
                <div key={comp.id} className="mt-5 mb-5">
                  <Card id={comp.id} flag={true}>
                    {comp.data}
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
