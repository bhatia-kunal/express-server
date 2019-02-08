export interface Ipermissions {
    [getUsers:string] : {
            all : string[],
            read : string[],
            write : string[],
            delete : string[]
    } 
}

export interface Iusers {
    traineeEmail : string,
    reviewerEmail : string
}