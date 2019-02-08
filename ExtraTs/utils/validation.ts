import validateEmail from './helper';

const validateUsers = (...arr:any[]):any => {
    let valid:any = [{count : 0}], inValid:any = [{count : 0}];
    arr.forEach(function(item, index, array) {
        let {traineeEmail, reviewerEmail} = item;
        if(validateEmail(traineeEmail) && validateEmail(reviewerEmail)) {
            valid.push(item);
            valid[0].count++;
        } else {
            inValid.push(item);
            inValid[0].count++;
        }
    });
    console.log("valid : " + JSON.stringify(valid, null, 2));
    console.log("invalid : " + JSON.stringify(inValid, null, 2));
}

export default validateUsers;