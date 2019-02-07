const validateEmail = (email:string):Boolean => {
    let pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(pattern.test(email)) {
        return true;
    } else {
        return false;
    }
}

export default validateEmail;