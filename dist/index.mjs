// src/types/poem.ts
var PoemStatus = /* @__PURE__ */ ((PoemStatus2) => {
  PoemStatus2["DELETED"] = "DELETED";
  PoemStatus2["ACTIVE"] = "ACTIVE";
  return PoemStatus2;
})(PoemStatus || {});

// src/types/operationStatus.ts
var OperationStatus = /* @__PURE__ */ ((OperationStatus2) => {
  OperationStatus2["SUCCESS"] = "SUCCESS";
  return OperationStatus2;
})(OperationStatus || {});

// src/types/stanza.ts
var StanzaStatus = /* @__PURE__ */ ((StanzaStatus2) => {
  StanzaStatus2["DELETED"] = "DELETED";
  StanzaStatus2["ACTIVE"] = "ACTIVE";
  return StanzaStatus2;
})(StanzaStatus || {});

// src/types/genre.ts
var CommonGenre = /* @__PURE__ */ ((CommonGenre2) => {
  CommonGenre2["THRILLER"] = "THRILLER";
  CommonGenre2["COMEDY"] = "COMEDY";
  CommonGenre2["ROMANCE"] = "ROMANCE";
  CommonGenre2["FICTION"] = "FICTION";
  CommonGenre2["KIDS"] = "KIDS";
  CommonGenre2["HORROR"] = "HORROR";
  CommonGenre2["DRAMA"] = "DRAMA";
  CommonGenre2["FOLKLORE"] = "FOLKLORE";
  CommonGenre2["OTHERS"] = "OTHERS";
  return CommonGenre2;
})(CommonGenre || {});

// src/types/user.ts
var UserStatus = /* @__PURE__ */ ((UserStatus2) => {
  UserStatus2["ACTIVE"] = "ACTIVE";
  UserStatus2["SUSPENDED"] = "SUSPENDED";
  UserStatus2["DELETED"] = "DELETED";
  return UserStatus2;
})(UserStatus || {});

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
  CommonGenre,
  OperationStatus,
  PoemStatus,
  StanzaStatus,
  USER_ERRORS,
  UserStatus,
  userSchema
};
