export enum USER_STATUS {
  ACTIVE = "ACTIVE",
  SUSPENDED = "SUSPENDED",
  DELETED = "DELETED",
}

export interface User {
  id?: number;
  name: string;
  username: string;
  phone: string;
  email?: string;
  dob: string;
  status: USER_STATUS;
  poemCount?: number;
  stanzaCount?: number;
  createdAt?: string;
  updatedAt?: string;
}
