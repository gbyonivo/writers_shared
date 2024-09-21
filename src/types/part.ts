import { User } from "./user";

export enum PartStatus {
  DELETED = "DELETED",
  ACTIVE = "ACTIVE",
}

export enum SpeakerName {
  "en-US-AriaNeural" = "en-US-AriaNeural",
}

export enum SpeakerStyle {
  cheerful = "cheerful",
  sad = "sad",
  angry = "angry",
  excited = "excited",
  friendly = "friendly",
  terrified = "terrified",
  shouting = "shouting",
  unfriendly = "unfriendly",
  whispering = "whispering",
  hopeful = "hopeful",
}

export interface SpeakerSetting {
  speakerPitchPercentage?: number;
  speakerRatePercentage?: number;
  speakerStyle?: SpeakerStyle;
  speakerName?: string;
  speakerPreBreakTime?: number;
  speakerPostBreakTime?: number;
  naratorPostContent?: string;
  naratorPreContent?: string;
  naratorPreBreakTime?: number;
  naratorPostBreakTime?: number;
}

export interface Part extends SpeakerSetting {
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
}
