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
}
