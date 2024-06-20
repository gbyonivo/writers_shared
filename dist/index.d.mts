import * as yup from 'yup';

declare enum CommonGenre {
    THRILLER = "THRILLER",
    COMEDY = "COMEDY",
    ROMANCE = "ROMANCE",
    FICTION = "FICTION",
    KIDS = "KIDS",
    HORROR = "HORROR",
    DRAMA = "DRAMA",
    FOLKLORE = "FOLKLORE",
    OTHERS = "OTHERS"
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
    poemCount?: number;
    stanzaCount?: number;
    createdAt?: string;
    updatedAt?: string;
}

declare enum StanzaStatus {
    DELETED = "DELETED",
    ACTIVE = "ACTIVE"
}
interface Stanza {
    id?: number;
    content: string;
    userId: number;
    user?: Partial<User>;
    poemId?: number;
    poemTitle?: string;
    genre: CommonGenre;
    position?: number;
    status: StanzaStatus;
    createdAt: string;
    updatedAt: string;
    rating?: number;
    userRating?: number;
    numberOfRatings?: number;
    stanzaId?: number;
}

declare enum PoemStatus {
    DELETED = "DELETED",
    ACTIVE = "ACTIVE"
}
interface Poem {
    id?: number;
    title: string;
    userId: number;
    stanzaLength?: number;
    status: PoemStatus;
    genre: CommonGenre;
    createdAt: string;
    updatedAt: string;
    user?: Partial<User>;
    stanzaCount?: number;
    firstStanza?: Partial<Stanza>;
    likes?: number;
    hasBeenLiked?: boolean;
}

interface PaginationInput {
    first: number;
    before: string;
    after: string;
    userId: number;
    peomId: number;
    searchValue: string;
}

declare enum OperationStatus {
    SUCCESS = "SUCCESS"
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

export { CommonGenre, OperationStatus, type PaginationInput, type Poem, PoemStatus, type Stanza, StanzaStatus, USER_ERRORS, type User, UserStatus, userSchema };
