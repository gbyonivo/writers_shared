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
  OPERATION_STATUS: () => OPERATION_STATUS,
  POEM_STATUS: () => POEM_STATUS,
  STANZA_STATUS: () => STANZA_STATUS,
  USER_STATUS: () => USER_STATUS
});
module.exports = __toCommonJS(src_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  OPERATION_STATUS,
  POEM_STATUS,
  STANZA_STATUS,
  USER_STATUS
});
