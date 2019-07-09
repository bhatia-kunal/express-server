const validationHandler = (config) => {
    return (req, res, next) => {
        const keys = Object.keys(config);
        keys.forEach((key) => {
            const item = config[key];
            const value = item.in.map((items) => {
                return req[items][key];
            });

            if (item && item.required) {
                const validateValue = value.filter((item1) => item1);
                if (validateValue.length !== value.length) {
                    next(notFound(`${item.errorMessage}`));
                }
            }

            if (item && item.string) {
                const temp = value[0];
                if (typeof temp !== 'string') {
                    next(notFound(`${key} as string is required`));
                }
            }

            if (item && item.number) {
                let validateValue1 = value.filter((item3) => item3);
                if (isNaN(validateValue1)) {
                next(notFound('not number type'));
                }
                if (validateValue1 === '') {
                validateValue1 = item.default;
                }
            }

            if (item && item.regex) {
                const validateValue = value.filter((item4) => item4);
                if (!item.regex.test(validateValue)) {
                next(notFound('incorrect format'));
                }
            }

            if (item && item.isObject) {
                const temp = value[0];
                if (typeof temp !== 'object') {
                    next(notFound(`${key} as object is required`));
                }
            }

            if (item.custom) {
                item.custom(80);
            }

            if (item && item.in) {
                const reqKeys = Object.keys(req[item.in[0]]);
                if (reqKeys.length) {
                    if (!reqKeys.includes(key)) {
                        next(notFound('incorrect request'));
                    }
                }
            }
        });
        next();
    };
};

const notFound = (message) => {
    return { error: 'Bad request', message, status: 400 };
};

export default validationHandler;
