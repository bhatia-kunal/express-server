const validations = {
    post: {
        id: {
            required: true,
            string: true,
            in: ['body'],
            errorMessage: "Id is required",
            custom: function(value) {
                console.log("Value", value);
            }
        },
        name: {
            required: true,
            regex: /^[a-zA-Z]*$/,
            in: ['body'],
            errorMessage: "Name is required"
        }
    },
    delete: {
        id: {
            required: true,
            errorMessage: "Id is required",
            in: ['params']
        }
    },
    get: {
        skip: {
            required: false,
            default: 0,
            number: true,
            in: ['query'],
            errorMessage: "Skip is invalid"
        },
        limit: {
            required: false,
            default: 10,
            number: true,
            in: ['query'],
            errorMessage: "Limit is invalid"
        }
    },
    put: {
        id: {
            required: true,
            string: true,
            in: ['body']
        },
        dateToUpdate: {
            in: ['body'],
            required: true,
            isObject: true,
            custom: function(dateToUpdate) {}
        }
    }
};

export default validations;