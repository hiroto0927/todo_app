import * as yup from "yup";

export const schema = yup
  .object({
    taskName: yup.string().required("1文字以上のタスク名を入力してください"),
  })
  .required();
