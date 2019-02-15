export interface Ipermissions {
    [getUsers: string]: {
            all: string[],
            read: string[],
            write: string[],
            delete: string[],
    };
}

export interface Iusers {
    reviewerEmail: string;
    traineeEmail: string;
}
