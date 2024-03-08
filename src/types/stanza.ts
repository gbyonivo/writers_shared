import { User } from "./user";

export enum STANZA_STATUS {
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
  position?: number;
  status: STANZA_STATUS;
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
  status: STANZA_STATUS;
}
