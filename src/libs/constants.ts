import { IPermission } from "./interface";
const headTrainer: string = "head-trainer";
const trainer: string = "trainer";
const trainee: string = "trainee";
const permission: IPermission = {
  "Trainee": {
    all: [headTrainer],
    read: [trainee, trainer],
    write: [trainer],
    delete: []
  }
};
export default permission