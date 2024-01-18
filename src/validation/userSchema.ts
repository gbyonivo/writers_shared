import { object, string, date } from "yup";

export const USER_ERRORS = {
  nameRequired: "Name is required",
  usernameRequired: "Username is required",
  emailRequired: "Email is required",
  emailInvalid: "Email is invalid",
  phoneRequired: "Phone is required",
  dobMax: "Invalid date",
  dobRequired: "Date of birth is required",
};

export const userSchema = object({
  name: string().required(USER_ERRORS.nameRequired),
  username: string().required(USER_ERRORS.usernameRequired),
  email: string()
    .required(USER_ERRORS.emailRequired)
    .email(USER_ERRORS.emailInvalid),
  phone: string().required(USER_ERRORS.phoneRequired),
  // add dob to be only date
  dob: date()
    .required(USER_ERRORS.dobRequired)
    .max(new Date(), USER_ERRORS.dobMax),
});
