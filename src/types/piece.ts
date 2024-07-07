import { Part } from "./part";
import { PieceType } from "./piece-type";
import { User } from "./user";

export enum PieceStatus {
  DELETED = "DELETED",
  ACTIVE = "ACTIVE",
}

export interface Piece {
  id?: number;
  title: string;
  userId: number;
  partLength?: number;
  status: PieceStatus;
  type: PieceType;
  createdAt: string;
  updatedAt: string;
  user?: Partial<User>;
  partCount?: number;
  firstPart?: Partial<Part>;
  likes?: number;
  hasBeenLiked?: boolean;
  genres: number[];
}
