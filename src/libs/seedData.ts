import UserRepository from '../repositories/user/UserRepository';
const repository = new UserRepository();

export const seed = () => {
    repository.countUser()
        .then((result) => {
            if (!result) {
                repository.create({
                    email: 'head.trainer@successive.tech',
                    name: 'Head-Trainer',
                    role: 'head-trainer',
                });
            }
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
