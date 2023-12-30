declare enum POEM_STATUS {
    DELETED = "DELETED",
    ACTIVE = "ACTIVE"
}
interface Poem {
    id?: number;
    title: string;
    userId: number;
    stanzaLength?: number;
    status: POEM_STATUS;
    createdAt: string;
    updatedAt: string;
}

interface PaginationInput {
    first: number;
    before: string;
    after: string;
    userId: number;
    peomId: number;
}

declare enum OPERATION_STATUS {
    SUCCESS = "SUCCESS"
}

declare enum STANZA_STATUS {
    DELETED = "DELETED",
    ACTIVE = "ACTIVE"
}
interface Stanza {
    id?: number;
    content: string;
    userId: number;
    poemId?: number;
    position?: number;
    status: STANZA_STATUS;
    createdAt: string;
    updatedAt: string;
}

declare enum USER_STATUS {
    ACTIVE = "ACTIVE",
    SUSPENDED = "SUSPENDED",
    DELETED = "DELETED"
}
interface User {
    id?: number;
    title: string;
    phone: string;
    email?: string;
    dob: string;
    status: USER_STATUS;
    createdAt: string;
    updatedAt: string;
}

export { OPERATION_STATUS, POEM_STATUS, type PaginationInput, type Poem, STANZA_STATUS, type Stanza, USER_STATUS, type User };
