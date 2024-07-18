export interface Bookmark {
  id: number;
  name: string;
  userId: number;
  pieceId: number;
  partIds: number[];
  createdAt: string;
  updatedAt: string;
}
