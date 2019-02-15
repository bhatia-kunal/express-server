import UserRepository from '../repositories/user/UserRepository';
const repository = new UserRepository();

export const seed = () => {
    repository.create({
        email: 'abc@gmail.com',
        name: 'anyName',
    });
};

export const deleteData = () => {
    repository.delete()
    .then((result) => {
        console.log('deleted', result);
    });
};

export const UpdateData = () => {
    repository.update()
    .then((result) => {
        console.log('Updates', result);
    });
};
