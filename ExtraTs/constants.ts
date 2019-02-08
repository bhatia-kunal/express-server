import { Ipermissions } from './intefaces';

const getUsers:string = 'getUsers';
const headTrainer: string = 'head-trainer';
const trainer:string = "trainer";
const trainee:string = "trainee";

const permissions:Ipermissions = {
    getUsers: {
    all: [headTrainer],
    read : [trainee, trainer],
    write : [trainer],
    delete: [],
    }
};

export default permissions;