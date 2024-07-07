// src/types/piece-type.ts
var PieceType = /* @__PURE__ */ ((PieceType2) => {
  PieceType2["POEM"] = "POEM";
  PieceType2["STORY"] = "STORY";
  return PieceType2;
})(PieceType || {});

// src/types/piece.ts
var PieceStatus = /* @__PURE__ */ ((PieceStatus2) => {
  PieceStatus2["DELETED"] = "DELETED";
  PieceStatus2["ACTIVE"] = "ACTIVE";
  return PieceStatus2;
})(PieceStatus || {});

// src/types/operationStatus.ts
var OperationStatus = /* @__PURE__ */ ((OperationStatus2) => {
  OperationStatus2["SUCCESS"] = "SUCCESS";
  OperationStatus2["FAILED"] = "FAILED";
  OperationStatus2["PENDING"] = "PENDING";
  return OperationStatus2;
})(OperationStatus || {});

// src/types/part.ts
var PartStatus = /* @__PURE__ */ ((PartStatus2) => {
  PartStatus2["DELETED"] = "DELETED";
  PartStatus2["ACTIVE"] = "ACTIVE";
  return PartStatus2;
})(PartStatus || {});

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
  OperationStatus,
  PartStatus,
  PieceStatus,
  PieceType,
  USER_ERRORS,
  UserStatus,
  userSchema
};
