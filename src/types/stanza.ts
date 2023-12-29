export enum STANZA_STATUS {
  DELETED = "DELETED",
  ACTIVE = "ACTIVE",
}

export interface Stanza {
  id?: number;
  content: string;
  userId: number;
  poemId?: number;
  position?: number;
  status: STANZA_STATUS;
  createdAt: string;
  updatedAt: string;
}

export interface StanzaWhere {
  userId?: number;
  poemId?: number;
  status: STANZA_STATUS;
}
