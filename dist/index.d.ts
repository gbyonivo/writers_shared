import * as yup from 'yup';

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
    name: string;
    phone: string;
    email?: string;
    dob: string;
    status: USER_STATUS;
    createdAt?: string;
    updatedAt?: string;
}

declare const USER_ERRORS: {
    nameRequired: string;
    emailRequired: string;
    emailInvalid: string;
    phoneRequired: string;
    dobMax: string;
    dobRequired: string;
};
declare const userSchema: yup.ObjectSchema<{
    name: string;
    email: string;
    phone: string;
    dob: Date;
}, yup.AnyObject, {
    name: undefined;
    email: undefined;
    phone: undefined;
    dob: undefined;
}, "">;

export { OPERATION_STATUS, POEM_STATUS, type PaginationInput, type Poem, STANZA_STATUS, type Stanza, USER_ERRORS, USER_STATUS, type User, userSchema };
