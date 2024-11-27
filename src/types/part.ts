import { SpeakerName } from "./speaker-names";
import { SpeakerStyle } from "./speaker-style";
import { User } from "./user";

export type AgeRating = "U" | "18" | "15" | "12" | "PG";

export enum PartStatus {
  DELETED = "DELETED",
  ACTIVE = "ACTIVE",
}

export interface SpeakerSetting {
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
  ageRating?: AgeRating;
  aiAgeRating?: string;
  voiceId?: string;
}
