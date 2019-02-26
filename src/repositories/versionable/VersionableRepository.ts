import * as mongoose from 'mongoose';
export default class VersionableRepository <D extends mongoose.Document, M extends mongoose.Model<D>> {
    public static generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }

    private versionableModel: M; 

    constructor(Model) {
        this.versionableModel = Model;
    }

    public findUser(data: any) {
        return this.versionableModel.findOne(data).lean();
    }

    public countUser() {
        return this.versionableModel.countDocuments();
    }

    public genericCreate(data: any): Promise<D> {
        const id = VersionableRepository.generateObjectId();
        return this.versionableModel.create({ ...data, _id: id, originalId: id });
    }

    public genericCreateAgain(data: any): Promise<D> {
        const id = VersionableRepository.generateObjectId();
        const save = { ...data };
        save._id = id;
        return this.versionableModel.create(save);
    }

    public genericDelete(data: any) {
        console.log('Delete', data);
        return this.versionableModel.updateOne({...data, deletedAt: {$exists: false}}, {$set: { deletedAt: Date.now() }});
    }

    public genericUpdate(data: any, dataToUpdate: any) {
        const { originalId } = data;
        console.log(data);
        this.versionableModel.findOne({ originalId, deletedAt: {$exist: false}})
            .then((result) => {
                const dataUpdate = Object.assign(result, dataToUpdate);
                console.log('Inside then', dataUpdate);
                return this.genericCreateAgain({dataUpdate});
            })
            .then((result) => {
                return this.versionableModel.updateOne({
                    _id: originalId,
                    deleteAt: {$exists: false}},
                    {deleteAt: Date.now()},
                    );
            })
            .catch((error) => {
                return error;
            });
    }
}
