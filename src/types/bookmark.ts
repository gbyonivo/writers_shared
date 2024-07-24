export interface Bookmark {
  id: number;
  name: string;
  userId: number;
  pieceId: number;
  partIds: number[];
  locked: boolean;
  createdAt: string;
  updatedAt: string;
}
