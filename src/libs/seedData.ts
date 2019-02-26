import UserRepository from '../repositories/user/UserRepository';
const repository = new UserRepository();

const seed = () => {
    repository.countUser()
        .then((result) => {
            if (!result) {
                repository.create({
                    email: 'head.trainer@successive.tech',
                    name: 'Head-Trainer',
                    role: 'head-trainer',
                });
                repository.create({
                    email: 'trainee@successive.tech',
                    name: 'Kunal',
                    role: 'trainee',
                });
            }
        });
};

export default seed;
