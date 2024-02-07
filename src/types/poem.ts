import { Stanza } from "../../dist";
import { User } from "./user";

export enum POEM_STATUS {
  DELETED = "DELETED",
  ACTIVE = "ACTIVE",
}

export interface Poem {
  id?: number;
  title: string;
  userId: number;
  stanzaLength?: number;
  status: POEM_STATUS;
  createdAt: string;
  updatedAt: string;
  user?: Partial<User>;
  stanzaCount?: number;
  firstStanza?: Partial<Stanza>;
  likes?: number;
}
