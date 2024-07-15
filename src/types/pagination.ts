export interface PaginationInput {
  first: number;
  before: string;
  after: string;
  userId: number;
  pieceId: number;
  searchValue: string;
  type: string;
}
