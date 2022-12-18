import * as yup from "yup";

export const schema = yup
  .object({
    id: yup.number(),
    data: yup.string().required(),
  })
  .required();
