import * as yup from 'yup';

declare enum PieceType {
    POEM = "POEM",
    STORY = "STORY"
}

declare enum UserStatus {
    ACTIVE = "ACTIVE",
    SUSPENDED = "SUSPENDED",
    DELETED = "DELETED"
}
interface User {
    id?: number;
    name: string;
    username: string;
    phone: string;
    email?: string;
    dob: string;
    status: UserStatus;
    pieceCount?: number;
    partCount?: number;
    createdAt?: string;
    updatedAt?: string;
}

declare enum PartStatus {
    DELETED = "DELETED",
    ACTIVE = "ACTIVE"
}
interface Part {
    id?: number;
    content: string;
    userId: number;
    user?: Partial<User>;
    pieceId?: number;
    pieceTitle?: string;
    genreIds: number[];
    position?: number;
    status: PartStatus;
    createdAt: string;
    updatedAt: string;
    rating?: number;
    userRating?: number;
    numberOfRatings?: number;
    partId?: number;
    identifier?: string;
    rate?: number;
    pitch?: number;
}

declare enum PieceStatus {
    DELETED = "DELETED",
    ACTIVE = "ACTIVE"
}
interface Piece {
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

interface PaginationInput {
    first: number;
    before: string;
    after: string;
    userId: number;
    pieceId: number;
    searchValue: string;
    type: string;
}

declare enum OperationStatus {
    SUCCESS = "SUCCESS",
    FAILED = "FAILED",
    PENDING = "PENDING"
}

declare const USER_ERRORS: {
    nameRequired: string;
    usernameRequired: string;
    emailRequired: string;
    emailInvalid: string;
    phoneRequired: string;
    dobMax: string;
    dobRequired: string;
};
declare const userSchema: yup.ObjectSchema<{
    name: string;
    username: string;
    email: string;
    phone: string;
    dob: Date;
}, yup.AnyObject, {
    name: undefined;
    username: undefined;
    email: undefined;
    phone: undefined;
    dob: undefined;
}, "">;

interface Bookmark {
    id: number;
    name: string;
    userId: number;
    pieceId: number;
    partIds: number[];
    locked: boolean;
    createdAt: string;
    updatedAt: string;
}

export { type Bookmark, OperationStatus, type PaginationInput, type Part, PartStatus, type Piece, PieceStatus, PieceType, USER_ERRORS, type User, UserStatus, userSchema };
