"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  OperationStatus: () => OperationStatus,
  PartStatus: () => PartStatus,
  PieceStatus: () => PieceStatus,
  PieceType: () => PieceType,
  USER_ERRORS: () => USER_ERRORS,
  UserStatus: () => UserStatus,
  userSchema: () => userSchema
});
module.exports = __toCommonJS(src_exports);

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
var import_yup = require("yup");
var USER_ERRORS = {
  nameRequired: "Name is required",
  usernameRequired: "Username is required",
  emailRequired: "Email is required",
  emailInvalid: "Email is invalid",
  phoneRequired: "Phone is required",
  dobMax: "Invalid date",
  dobRequired: "Date of birth is required"
};
var userSchema = (0, import_yup.object)({
  name: (0, import_yup.string)().required(USER_ERRORS.nameRequired),
  username: (0, import_yup.string)().required(USER_ERRORS.usernameRequired),
  email: (0, import_yup.string)().required(USER_ERRORS.emailRequired).email(USER_ERRORS.emailInvalid),
  phone: (0, import_yup.string)().required(USER_ERRORS.phoneRequired),
  // add dob to be only date
  dob: (0, import_yup.date)().required(USER_ERRORS.dobRequired).max(/* @__PURE__ */ new Date(), USER_ERRORS.dobMax)
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  OperationStatus,
  PartStatus,
  PieceStatus,
  PieceType,
  USER_ERRORS,
  UserStatus,
  userSchema
});
