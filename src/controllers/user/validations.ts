const validations = {
    delete: {
        id: {
            errorMessage: 'Id is required',
            in: ['params'],
            required: true,
        },
    },
    get: {
        limit: {
            default: 10,
            errorMessage: 'Limit is invalid',
            in: ['query'],
            number: true,
            required: false,
        },
        skip: {
            default: 0,
            errorMessage: 'Skip is invalid',
            in: ['query'],
            number: true,
            required: false,
        },
    },
    login: {
        Password: {
            errorMessage: 'Password is required',
            in: ['body'],
            required: true,
        },
        email: {
            errorMessage: 'Email is required',
            in: ['body'],
            regex: /^[\w-\.]+@(successive.tech)$/,
            required: true,
        },
    },
    post: {
        name: {
            errorMessage: 'Name is required',
            in: ['body'],
            regex: /^[a-zA-Z]*$/,
            required: true,
        },
    },
    put: {
        dataToUpdate: {
            in: ['body'],
            isObject: true,
            required: true,
        },
        id: {
            in: ['body'],
            required: true,
            string: true,
        },
    },
};

export default validations;
