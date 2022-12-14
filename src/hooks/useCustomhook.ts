import { useState } from "react";

export default function useCustomHook() {
  const [data, setData] = useState<string>("");
  const [task, setTask] = useState<string[]>([]);
  const [comp, setComp] = useState<string[]>([]);

  return { data, setData, task, setTask, comp, setComp };
}
