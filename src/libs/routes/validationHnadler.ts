import { LOADIPHLPAPI } from "dns";

const validationHandler = (config) => {
    return (req, res, next) => {
        const keys = Object.keys(config);
        keys.forEach(key => {
            const item = config[key];
            const value = item.in.map(items => {
                return req[items][key];
            });

            if(item && item.required) {
                const validateValue = value.filter(item => item);
                if(validateValue.length !== value.length) {
                    next(notFound(`${item.errorMessage}`));
                }
            }

            if(item && item.string) {
                const validateValue = value.filter(item => item);
                const iterate = validateValue.values();
                if(typeof iterate.next().value !== "string") {
                    next(notFound("Not a string"));
                }
            }

            if (item && item.number) {
                let validateValue1 = value.filter(item => item);
                if (isNaN(validateValue1)) {
                next(notFound("not number type"));
                }
                if (validateValue1 == "") {
                validateValue1 = item.default;
                }
            }

            if (item && item.regex) {
                const validateValue = value.filter(item => item);
                if (!item.regex.test(validateValue)) {
                next(notFound("incorrect format"));
                }
            }
            
            if (item.isObject) {
                const validateValue = value.filter(item => item);
                const iterate = validateValue.values();
                if (typeof iterate.next().value !== "object") {
                next(notFound("type" || `${validateValue}`));
                }
            }
        
            if (item.custom) {
                item.custom(80);
            }
            
            if(item && item.required) {
            if (item && item.in) {
                const reqKeys = Object.keys(req[item.in[0]]);
                if (!reqKeys.length) {
                    if (!reqKeys.includes(key)) {
                        next(notFound("incorrect request"));
                    }
                }
            }
        }
        });
        next();
    }
};

const notFound = (message) => {
    return { error: "Bad request", message: message, status: 400 };
}

export default validationHandler;