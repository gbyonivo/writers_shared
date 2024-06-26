import { CommonGenre } from "./genre";
import { User } from "./user";

export enum StanzaStatus {
  DELETED = "DELETED",
  ACTIVE = "ACTIVE",
}

export interface Stanza {
  id?: number;
  content: string;
  userId: number;
  user?: Partial<User>;
  poemId?: number;
  poemTitle?: string;
  genre: CommonGenre;
  position?: number;
  status: StanzaStatus;
  createdAt: string;
  updatedAt: string;
  rating?: number;
  userRating?: number;
  numberOfRatings?: number;
  stanzaId?: number;
}

export interface StanzaWhere {
  userId?: number;
  poemId?: number;
  status: StanzaStatus;
}
