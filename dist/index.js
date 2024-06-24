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
  CommonGenre: () => CommonGenre,
  OperationStatus: () => OperationStatus,
  PoemStatus: () => PoemStatus,
  PoemType: () => PoemType,
  StanzaStatus: () => StanzaStatus,
  USER_ERRORS: () => USER_ERRORS,
  UserStatus: () => UserStatus,
  userSchema: () => userSchema
});
module.exports = __toCommonJS(src_exports);

// src/types/poem-type.ts
var PoemType = /* @__PURE__ */ ((PoemType2) => {
  PoemType2["POEM"] = "POEM";
  PoemType2["STORY"] = "STORY";
  return PoemType2;
})(PoemType || {});

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
  CommonGenre,
  OperationStatus,
  PoemStatus,
  PoemType,
  StanzaStatus,
  USER_ERRORS,
  UserStatus,
  userSchema
});
