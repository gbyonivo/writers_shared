import { CommonGenre } from "./genre";
import { Stanza } from "./stanza";
import { Type } from "./type";
import { User } from "./user";

export enum PoemStatus {
  DELETED = "DELETED",
  ACTIVE = "ACTIVE",
}

export interface Poem {
  id?: number;
  title: string;
  userId: number;
  stanzaLength?: number;
  status: PoemStatus;
  genre: CommonGenre;
  type: Type;
  createdAt: string;
  updatedAt: string;
  user?: Partial<User>;
  stanzaCount?: number;
  firstStanza?: Partial<Stanza>;
  likes?: number;
  hasBeenLiked?: boolean;
}
