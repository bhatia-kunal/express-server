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
    post: {
        id: {
            errorMessage: 'Id is required',
            in: ['body'],
            number: true,
            required: true,
            custom(value) {
                console.log('Value', value);
                throw { error: 'Error Occured', message: 'Message'};
            },
        },
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
            custom(dataToUpdate) {
                console.log(dataToUpdate);
            },
        },
        id: {
            in: ['body'],
            required: true,
            string: true,
        },
    },
};

export default validations;
