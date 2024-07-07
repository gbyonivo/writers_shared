import { User } from "./user";

export enum PartStatus {
  DELETED = "DELETED",
  ACTIVE = "ACTIVE",
}

export interface Part {
  id?: number;
  content: string;
  userId: number;
  user?: Partial<User>;
  pieceId?: number;
  pieceTitle?: string;
  genres: number[];
  position?: number;
  status: PartStatus;
  createdAt: string;
  updatedAt: string;
  rating?: number;
  userRating?: number;
  numberOfRatings?: number;
  partId?: number;
}

export interface PartWhere {
  userId?: number;
  pieceId?: number;
  status: PartStatus;
}
