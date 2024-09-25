export enum Country {
  US = "US",
  AU = "AU",
  NG = "NG",
  IN = "IN",
  CA = "CA",
  UK = "UK",
  IE = "IE",
  HK = "HK",
}

export enum Sex {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

export const SpeakerCountry: Record<Country, String> = {
  AU: "AUSTRALIA",
  CA: "CANADA",
  NG: "NIGERIA",
  IN: "INDIA",
  UK: "UNITED_KINGDOM",
  IE: "IRELAND",
  US: "UNITED_STATES",
  HK: "HONK_KONG",
};

export enum SpeakerName {
  //united states
  "en-US-BrandonNeural" = "en-US-BrandonNeural",
  "en-US-MichelleNeural" = "en-US-MichelleNeural",
  //nigeria
  "en-NG-EzinneNeural" = "en-NG-EzinneNeural",
  "en-NG-AbeoNeural" = "en-NG-AbeoNeural",
  // honk kong
  "en-HK-YanNeural" = "en-HK-YanNeural",
  "en-HK-SamNeural" = "en-HK-SamNeural",
  // uk
  "en-GB-ElliotNeural" = "en-GB-ElliotNeural",
  "en-GB-BellaNeural" = "en-GB-BellaNeural",
  // canada
  "en-CA-ClaraNeural" = "en-CA-ClaraNeural",
  "en-CA-LiamNeural" = "en-CA-LiamNeural",
  // india
  "en-IN-AaravNeural" = "en-IN-AaravNeural",
  "en-IN-KavyaNeural" = "en-IN-KavyaNeural",
  // ireland
  "en-IE-EmilyNeural" = "en-IE-EmilyNeural",
  "en-IE-ConnorNeural" = "en-IE-ConnorNeural",
  // aussie
  "en-AU-DarrenNeural" = "en-AU-DarrenNeural",
  "en-AU-CarlyNeural" = "en-AU-CarlyNeural",
}

export const SpeakerNamesByCountryAndSex: Record<
  Country,
  Record<Sex, SpeakerName>
> = {
  NG: {
    FEMALE: SpeakerName["en-NG-EzinneNeural"],
    MALE: SpeakerName["en-NG-AbeoNeural"],
  },
  AU: {
    FEMALE: SpeakerName["en-AU-CarlyNeural"],
    MALE: SpeakerName["en-AU-DarrenNeural"],
  },
  IE: {
    FEMALE: SpeakerName["en-IE-EmilyNeural"],
    MALE: SpeakerName["en-IE-ConnorNeural"],
  },
  HK: {
    FEMALE: SpeakerName["en-HK-YanNeural"],
    MALE: SpeakerName["en-HK-SamNeural"],
  },
  UK: {
    FEMALE: SpeakerName["en-GB-BellaNeural"],
    MALE: SpeakerName["en-GB-ElliotNeural"],
  },
  US: {
    FEMALE: SpeakerName["en-US-MichelleNeural"],
    MALE: SpeakerName["en-US-BrandonNeural"],
  },
  CA: {
    FEMALE: SpeakerName["en-CA-ClaraNeural"],
    MALE: SpeakerName["en-CA-LiamNeural"],
  },
  IN: {
    FEMALE: SpeakerName["en-IN-KavyaNeural"],
    MALE: SpeakerName["en-IN-AaravNeural"],
  },
};
