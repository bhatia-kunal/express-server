const diamond = (rows:number) => {
    let str:string = "";
    for (let i:number = 1; i <= rows; i++) {
        for (let j:number = 1; j <= rows; j++) {
                if(j <= (rows - i)) {
                    str += " ";
                } else {
                    str += "* "
                }
            } 
            console.log(str);
            str = "";
        }
    for(let i:number = 1; i <= rows; i++) {
        for(let j:number = 1; j <= rows; j++) {
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