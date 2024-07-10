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
  status: PieceStatus;
  type: PieceType;
  createdAt: string;
  updatedAt: string;
  partCount?: number;
  likes?: number;
  hasBeenLiked?: boolean;
  firstPartId?: number;
  genreIds: number[];
  firstPart?: Partial<Part>;
  user?: Partial<User>;
}
