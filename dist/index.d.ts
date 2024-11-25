import * as yup from 'yup';

declare enum PieceType {
    POEM = "POEM",
    STORY = "STORY"
}

declare enum Country {
    US = "US",
    AU = "AU",
    NG = "NG",
    IN = "IN",
    CA = "CA",
    UK = "UK",
    IE = "IE",
    HK = "HK"
}
declare enum Sex {
    MALE = "MALE",
    FEMALE = "FEMALE"
}
declare const SpeakerCountry: Record<Country, String>;
declare enum SpeakerName {
    "en-US-BrandonNeural" = "en-US-BrandonNeural",
    "en-US-MichelleNeural" = "en-US-MichelleNeural",
    "en-NG-EzinneNeural" = "en-NG-EzinneNeural",
    "en-NG-AbeoNeural" = "en-NG-AbeoNeural",
    "en-HK-YanNeural" = "en-HK-YanNeural",
    "en-HK-SamNeural" = "en-HK-SamNeural",
    "en-GB-ElliotNeural" = "en-GB-ElliotNeural",
    "en-GB-BellaNeural" = "en-GB-BellaNeural",
    "en-CA-ClaraNeural" = "en-CA-ClaraNeural",
    "en-CA-LiamNeural" = "en-CA-LiamNeural",
    "en-IN-AaravNeural" = "en-IN-AaravNeural",
    "en-IN-KavyaNeural" = "en-IN-KavyaNeural",
    "en-IE-EmilyNeural" = "en-IE-EmilyNeural",
    "en-IE-ConnorNeural" = "en-IE-ConnorNeural",
    "en-AU-DarrenNeural" = "en-AU-DarrenNeural",
    "en-AU-CarlyNeural" = "en-AU-CarlyNeural"
}
declare const SpeakerNamesByCountryAndSex: Record<Country, Record<Sex, SpeakerName>>;

declare enum SpeakerStyle {
    advertisement_upbeat = "advertisement_upbeat",
    affectionate = "affectionate",
    angry = "angry",
    assistant = "assistant",
    calm = "calm",
    chat = "chat",
    cheerful = "cheerful",
    customerservice = "customerservice",
    depressed = "depressed",
    disgruntled = "disgruntled",
    "documentary-narration" = "documentary-narration",
    embarrassed = "embarrassed",
    empathetic = "empathetic",
    envious = "envious",
    excited = "excited",
    fearful = "fearful",
    friendly = "friendly",
    gentle = "gentle",
    hopeful = "hopeful",
    lyrical = "lyrical",
    "narration-professional" = "narration-professional",
    "narration-relaxed" = "narration-relaxed",
    newscast = "newscast",
    "newscast-casual" = "newscast-casual",
    "newscast-formal" = "newscast-formal",
    "poetry-reading" = "poetry-reading",
    sad = "sad",
    serious = "serious",
    shouting = "shouting",
    sports_commentary = "sports_commentary",
    sports_commentary_excited = "sports_commentary_excited",
    whispering = "whispering",
    terrified = "terrified",
    unfriendly = "unfriendly"
}

declare enum UserStatus {
    ACTIVE = "ACTIVE",
    SUSPENDED = "SUSPENDED",
    DELETED = "DELETED"
}
interface User {
    id?: number;
    name: string;
    username: string;
    phone: string;
    email?: string;
    dob: string;
    status: UserStatus;
    pieceCount?: number;
    partCount?: number;
    createdAt?: string;
    updatedAt?: string;
}

type AgeRating = "U" | "18" | "15" | "12" | "PG";
declare enum PartStatus {
    DELETED = "DELETED",
    ACTIVE = "ACTIVE"
}
interface SpeakerSetting {
    speakerPitchPercentage?: number;
    speakerRatePercentage?: number;
    speakerStyle?: SpeakerStyle;
    speakerName?: SpeakerName;
    speakerPreBreakTime?: number;
    speakerPostBreakTime?: number;
    naratorPostContent?: string;
    naratorPreContent?: string;
    naratorPreBreakTime?: number;
    naratorPostBreakTime?: number;
}
interface Part extends SpeakerSetting {
    id?: number;
    content: string;
    userId: number;
    user?: Partial<User>;
    pieceId?: number;
    pieceTitle?: string;
    genreIds: number[];
    position?: number;
    status: PartStatus;
    createdAt: string;
    updatedAt: string;
    rating?: number;
    userRating?: number;
    numberOfRatings?: number;
    partId?: number;
    ageRating?: AgeRating;
    aiAgeRating?: string;
}

declare enum PieceStatus {
    DELETED = "DELETED",
    ACTIVE = "ACTIVE"
}
interface Piece {
    id?: number;
    title: string;
    userId: number;
    status: PieceStatus;
    type: PieceType;
    createdAt: string;
    updatedAt: string;
    imageUrl: string;
    partCount?: number;
    likes?: number;
    hasBeenLiked?: boolean;
    firstPartId?: number;
    genreIds: number[];
    firstPart?: Partial<Part>;
    user?: Partial<User>;
    minAge: number;
}

interface PaginationInput {
    first: number;
    before: string;
    after: string;
    userId: number;
    pieceId: number;
    searchValue: string;
    type: string;
}

declare enum OperationStatus {
    SUCCESS = "SUCCESS",
    FAILED = "FAILED",
    PENDING = "PENDING"
}

declare const USER_ERRORS: {
    nameRequired: string;
    usernameRequired: string;
    emailRequired: string;
    emailInvalid: string;
    phoneRequired: string;
    dobMax: string;
    dobRequired: string;
};
declare const userSchema: yup.ObjectSchema<{
    name: string;
    username: string;
    email: string;
    phone: string;
    dob: Date;
}, yup.AnyObject, {
    name: undefined;
    username: undefined;
    email: undefined;
    phone: undefined;
    dob: undefined;
}, "">;

interface Bookmark {
    id: number;
    name: string;
    userId: number;
    pieceId: number;
    partIds: number[];
    locked: boolean;
    createdAt: string;
    updatedAt: string;
}

export { type Bookmark, Country, OperationStatus, type PaginationInput, type Part, PartStatus, type Piece, PieceStatus, PieceType, Sex, SpeakerCountry, SpeakerName, SpeakerNamesByCountryAndSex, SpeakerStyle, USER_ERRORS, type User, UserStatus, userSchema };
