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

// src/types/speaker-style.ts
var SpeakerStyle = /* @__PURE__ */ ((SpeakerStyle2) => {
  SpeakerStyle2["advertisement_upbeat"] = "advertisement_upbeat";
  SpeakerStyle2["affectionate"] = "affectionate";
  SpeakerStyle2["angry"] = "angry";
  SpeakerStyle2["assistant"] = "assistant";
  SpeakerStyle2["calm"] = "calm";
  SpeakerStyle2["chat"] = "chat";
  SpeakerStyle2["cheerful"] = "cheerful";
  SpeakerStyle2["customerservice"] = "customerservice";
  SpeakerStyle2["depressed"] = "depressed";
  SpeakerStyle2["disgruntled"] = "disgruntled";
  SpeakerStyle2["documentary-narration"] = "documentary-narration";
  SpeakerStyle2["embarrassed"] = "embarrassed";
  SpeakerStyle2["empathetic"] = "empathetic";
  SpeakerStyle2["envious"] = "envious";
  SpeakerStyle2["excited"] = "excited";
  SpeakerStyle2["fearful"] = "fearful";
  SpeakerStyle2["friendly"] = "friendly";
  SpeakerStyle2["gentle"] = "gentle";
  SpeakerStyle2["hopeful"] = "hopeful";
  SpeakerStyle2["lyrical"] = "lyrical";
  SpeakerStyle2["narration-professional"] = "narration-professional";
  SpeakerStyle2["narration-relaxed"] = "narration-relaxed";
  SpeakerStyle2["newscast"] = "newscast";
  SpeakerStyle2["newscast-casual"] = "newscast-casual";
  SpeakerStyle2["newscast-formal"] = "newscast-formal";
  SpeakerStyle2["poetry-reading"] = "poetry-reading";
  SpeakerStyle2["sad"] = "sad";
  SpeakerStyle2["serious"] = "serious";
  SpeakerStyle2["shouting"] = "shouting";
  SpeakerStyle2["sports_commentary"] = "sports_commentary";
  SpeakerStyle2["sports_commentary_excited"] = "sports_commentary_excited";
  SpeakerStyle2["whispering"] = "whispering";
  SpeakerStyle2["terrified"] = "terrified";
  SpeakerStyle2["unfriendly"] = "unfriendly";
  return SpeakerStyle2;
})(SpeakerStyle || {});

// src/types/speaker-names.ts
var Country = /* @__PURE__ */ ((Country2) => {
  Country2["US"] = "US";
  Country2["AU"] = "AU";
  Country2["NG"] = "NG";
  Country2["IN"] = "IN";
  Country2["CA"] = "CA";
  Country2["UK"] = "UK";
  Country2["IE"] = "IE";
  Country2["HK"] = "HK";
  return Country2;
})(Country || {});
var Sex = /* @__PURE__ */ ((Sex2) => {
  Sex2["MALE"] = "MALE";
  Sex2["FEMALE"] = "FEMALE";
  return Sex2;
})(Sex || {});
var SpeakerCountry = {
  AU: "AUSTRALIA",
  CA: "CANADA",
  NG: "NIGERIA",
  IN: "INDIA",
  UK: "UNITED_KINGDOM",
  IE: "IRELAND",
  US: "UNITED_STATES",
  HK: "HONK_KONG"
};
var SpeakerName = /* @__PURE__ */ ((SpeakerName2) => {
  SpeakerName2["en-US-BrandonNeural"] = "en-US-BrandonNeural";
  SpeakerName2["en-US-MichelleNeural"] = "en-US-MichelleNeural";
  SpeakerName2["en-NG-EzinneNeural"] = "en-NG-EzinneNeural";
  SpeakerName2["en-NG-AbeoNeural"] = "en-NG-AbeoNeural";
  SpeakerName2["en-HK-YanNeural"] = "en-HK-YanNeural";
  SpeakerName2["en-HK-SamNeural"] = "en-HK-SamNeural";
  SpeakerName2["en-GB-ElliotNeural"] = "en-GB-ElliotNeural";
  SpeakerName2["en-GB-BellaNeural"] = "en-GB-BellaNeural";
  SpeakerName2["en-CA-ClaraNeural"] = "en-CA-ClaraNeural";
  SpeakerName2["en-CA-LiamNeural"] = "en-CA-LiamNeural";
  SpeakerName2["en-IN-AaravNeural"] = "en-IN-AaravNeural";
  SpeakerName2["en-IN-KavyaNeural"] = "en-IN-KavyaNeural";
  SpeakerName2["en-IE-EmilyNeural"] = "en-IE-EmilyNeural";
  SpeakerName2["en-IE-ConnorNeural"] = "en-IE-ConnorNeural";
  SpeakerName2["en-AU-DarrenNeural"] = "en-AU-DarrenNeural";
  SpeakerName2["en-AU-CarlyNeural"] = "en-AU-CarlyNeural";
  return SpeakerName2;
})(SpeakerName || {});
var SpeakerNamesByCountryAndSex = {
  NG: {
    FEMALE: "en-NG-EzinneNeural" /* en-NG-EzinneNeural */,
    MALE: "en-NG-AbeoNeural" /* en-NG-AbeoNeural */
  },
  AU: {
    FEMALE: "en-AU-CarlyNeural" /* en-AU-CarlyNeural */,
    MALE: "en-AU-DarrenNeural" /* en-AU-DarrenNeural */
  },
  IE: {
    FEMALE: "en-IE-EmilyNeural" /* en-IE-EmilyNeural */,
    MALE: "en-IE-ConnorNeural" /* en-IE-ConnorNeural */
  },
  HK: {
    FEMALE: "en-HK-YanNeural" /* en-HK-YanNeural */,
    MALE: "en-HK-SamNeural" /* en-HK-SamNeural */
  },
  UK: {
    FEMALE: "en-GB-BellaNeural" /* en-GB-BellaNeural */,
    MALE: "en-GB-ElliotNeural" /* en-GB-ElliotNeural */
  },
  US: {
    FEMALE: "en-US-MichelleNeural" /* en-US-MichelleNeural */,
    MALE: "en-US-BrandonNeural" /* en-US-BrandonNeural */
  },
  CA: {
    FEMALE: "en-CA-ClaraNeural" /* en-CA-ClaraNeural */,
    MALE: "en-CA-LiamNeural" /* en-CA-LiamNeural */
  },
  IN: {
    FEMALE: "en-IN-KavyaNeural" /* en-IN-KavyaNeural */,
    MALE: "en-IN-AaravNeural" /* en-IN-AaravNeural */
  }
};
export {
  Country,
  OperationStatus,
  PartStatus,
  PieceStatus,
  PieceType,
  Sex,
  SpeakerCountry,
  SpeakerName,
  SpeakerNamesByCountryAndSex,
  SpeakerStyle,
  USER_ERRORS,
  UserStatus,
  userSchema
};
