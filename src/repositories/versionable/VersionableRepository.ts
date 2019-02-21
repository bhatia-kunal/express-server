import * as mongoose from 'mongoose';
export default class VersionableRepository <D extends mongoose.Document, M extends mongoose.Model<D>> {
    public static generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }

    private versionableModel: M;

    constructor(Model) {
        this.versionableModel = Model;
    }

    public findUser(data) {
        return this.versionableModel.findOne(data).lean();
    }

    public count() {
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
        const { originalId } = data;
        return this.versionableModel.updateOne({ originalId, deletedAt: {$exists: false}}, { deleteAt: Date.now()});
    }

    public genricUpdate(data: any, dataToUpdate: any) {
        const { originalId } = data;
        this.versionableModel.findOne({ originalId, deledatateAt: {$exist: false}})
            .then((result) => {
                const dataUpdate = Object.assign(result, dataToUpdate);
                return this.genericCreateAgain({dataUpdate});
            })
            .then((result) => {
                return this.versionableModel.updateOne({
                    deleteAt: {$exists: false}},
                    originalId,
                    {deleteAt: Date.now()},
                    );
            })
            .catch((error) => {
                return error;
            });
    }
}
