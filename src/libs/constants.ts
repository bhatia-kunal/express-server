import { IPermission } from './interface';
const headTrainer: string = 'head-trainer';
const trainer: string = 'trainer';
const trainee: string = 'trainee';
const permission: IPermission = {
  Trainee: {
    all: [headTrainer],
    delete: [],
    read: [trainee, trainer],
    write: [trainer],
  },
  User: {
    all: [headTrainer],
    delete: [],
    read: [trainee, trainer],
    write: [trainer],
  },
};
export default permission;
