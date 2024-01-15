export enum USER_STATUS {
  ACTIVE = "ACTIVE",
  SUSPENDED = "SUSPENDED",
  DELETED = "DELETED",
}

export interface User {
  id?: number;
  name: string;
  phone: string;
  email?: string;
  dob: string;
  status: USER_STATUS;
  createdAt?: string;
  updatedAt?: string;
}

export interface UserValidationError {
  email?: string;
  dob?: string;
  title?: string;
  phone?: string;
}

export interface Errors<T> {
  errors?: T;
  hasError?: boolean;
}
