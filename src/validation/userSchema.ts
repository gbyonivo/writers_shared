import { object, string, date } from "yup";

export const userSchema = object({
  name: string().required(),
  email: string().email(),
  phone: string().required(),
  dob: date().max(new Date()),
});
