const users = [
    {
        traineeEmail : 'trainee1@successive.tech',
        reviewerEmail : 'reviewer1@successive.tch'
    },
    {
        traineeEmail : 'trainee2@successive.tech',
        reviewerEmail : 'reviewer2@successive.tch'
    }
];

const validateEmail = (email) => {
    let pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(pattern.test(email)) {
        return true;
    } else {
        return false;
    }
}

const validateUsers = (arr) => {
    let valid = [{count : 0}], inValid = [{count : 0}];
    arr.forEach(function(item, index, array) {
        let {traineeEmail, reviewerEmail} = item;
        if(validateEmail(traineeEmail) && validateEmail(reviewerEmail)) {
            valid.push(item);
            valid[0].count++
        } else {
            inValid.push(item);
            inValid[0].count++
        }
    });
    console.log("valid : " + JSON.stringify(valid, null, 2));
    console.log("invalid : " + JSON.stringify(inValid, null, 2));
}

validateUsers(users);