const diamond = (rows) => {
    let str = "";
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= rows; j++) {
                if(j <= (rows - i)) {
                    str += " ";
                } else {
                    str += "* "
                }
            } 
            console.log(str);
            str = "";
        }
    for(let i = 1; i <= rows; i++) {
        for(let j = 1; j <= rows; j++) {
            if(j >= i) {
                str += "* ";
            } else {
                str+=" ";
            }
        }
        console.log(str);
        str = "";
    }
};

export default diamond;