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
        console.log(data);
        return this.versionableModel.findOne({...data, deletedAt: {$exists: false}}).lean();
    }

    public async findAll(data) {
        const { role } = data;
        return this.versionableModel.find(
        { role, deletedAt: { $exists: false } }, undefined);
    }

    public countUser() {
        return this.versionableModel.countDocuments();
    }

    public genericCreate(data: any): Promise<D> {
        const id = VersionableRepository.generateObjectId();
        return this.versionableModel.create({ ...data, _id: id, originalId: id });
    }

    public genericDelete(data: any) {
        console.log('Delete', data);
        return this.versionableModel.findOneAndUpdate(
            {originalId: data.id, deletedAt: {$exists: false}},
            {$set: { deletedAt: Date.now() }},
            )
            .then((result) => {
                return result;
            }).catch((error) => {
                throw error;
            });
    }

    public genericUpdate(data: any, updateData: any) {
        const { originalId } = data;
        this.versionableModel.findOne({ originalId, deletedAt: { $exists: false } })
        .lean()
        .then((result) => {
            let returnedData = {};
            const previousId = result._id;
            delete result._id;
            const dataToUpdate = {...result, ...updateData};
            const newId = VersionableRepository.generateObjectId();
            console.log(previousId);
            this.versionableModel.findOneAndUpdate(
                {_id: previousId, deletedAt: {$exists: false}},
                {$set: { deletedAt: Date.now() }},
                {new: true},
                ).then((updatedResult) => updatedResult);
            this.versionableModel.create({...dataToUpdate, _id: newId, createdAt: Date.now()})
                    .then((resultData) => returnedData = resultData);
                // console.log('Response', response);
            return result;
        });
    }
}
