import { object, string, date } from "yup";

export const USER_ERRORS = {
  nameRequired: "Name is required",
  emailRequired: "Email is required",
  emailInvalid: "Email is invalid",
  phoneRequired: "Phone is required",
  dobMax: "Invalid date",
  dobRequired: "Date of birth is required",
};

export const userSchema = object({
  name: string().required(USER_ERRORS.nameRequired),
  email: string()
    .required(USER_ERRORS.emailRequired)
    .email(USER_ERRORS.emailInvalid),
  phone: string().required(USER_ERRORS.phoneRequired),
  dob: date()
    .required(USER_ERRORS.dobRequired)
    .max(new Date(), USER_ERRORS.dobMax),
});
