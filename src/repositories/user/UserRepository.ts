import * as mongoose from 'mongoose';
import VersionableRepository from '../versionable/VersionableRepository';
import IUserModel from './IUserModel';
import { UserModel } from './UserModel';

class UserRepository extends VersionableRepository <IUserModel, mongoose.Model<IUserModel>> {
    public static generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }
    private Model: mongoose.Model<IUserModel>;

    constructor() {
        super(UserModel);
    }

    public create(data: any): Promise<IUserModel> {
        return this.genericCreate(data);
    }

    public delete(data) {
        return this.genericDelete({ id: data});
    }

    public update(data: any, dataToUpdate: any) {
        return this.genericUpdate(data, dataToUpdate);
    }
}

export default UserRepository;
