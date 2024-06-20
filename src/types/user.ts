export enum UserStatus {
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
  status: UserStatus;
  poemCount?: number;
  stanzaCount?: number;
  createdAt?: string;
  updatedAt?: string;
}
