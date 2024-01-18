// src/types/poem.ts
var POEM_STATUS = /* @__PURE__ */ ((POEM_STATUS2) => {
  POEM_STATUS2["DELETED"] = "DELETED";
  POEM_STATUS2["ACTIVE"] = "ACTIVE";
  return POEM_STATUS2;
})(POEM_STATUS || {});

// src/types/operationStatus.ts
var OPERATION_STATUS = /* @__PURE__ */ ((OPERATION_STATUS2) => {
  OPERATION_STATUS2["SUCCESS"] = "SUCCESS";
  return OPERATION_STATUS2;
})(OPERATION_STATUS || {});

// src/types/stanza.ts
var STANZA_STATUS = /* @__PURE__ */ ((STANZA_STATUS2) => {
  STANZA_STATUS2["DELETED"] = "DELETED";
  STANZA_STATUS2["ACTIVE"] = "ACTIVE";
  return STANZA_STATUS2;
})(STANZA_STATUS || {});

// src/types/user.ts
var USER_STATUS = /* @__PURE__ */ ((USER_STATUS2) => {
  USER_STATUS2["ACTIVE"] = "ACTIVE";
  USER_STATUS2["SUSPENDED"] = "SUSPENDED";
  USER_STATUS2["DELETED"] = "DELETED";
  return USER_STATUS2;
})(USER_STATUS || {});

// src/validation/userSchema.ts
import { object, string, date } from "yup";
var USER_ERRORS = {
  nameRequired: "Name is required",
  usernameRequired: "Username is required",
  emailRequired: "Email is required",
  emailInvalid: "Email is invalid",
  phoneRequired: "Phone is required",
  dobMax: "Invalid date",
  dobRequired: "Date of birth is required"
};
var userSchema = object({
  name: string().required(USER_ERRORS.nameRequired),
  username: string().required(USER_ERRORS.usernameRequired),
  email: string().required(USER_ERRORS.emailRequired).email(USER_ERRORS.emailInvalid),
  phone: string().required(USER_ERRORS.phoneRequired),
  // add dob to be only date
  dob: date().required(USER_ERRORS.dobRequired).max(/* @__PURE__ */ new Date(), USER_ERRORS.dobMax)
});
export {
  OPERATION_STATUS,
  POEM_STATUS,
  STANZA_STATUS,
  USER_ERRORS,
  USER_STATUS,
  userSchema
};
