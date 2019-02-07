const equilateralTriangle = (rows) => {
    for (let i = 1; i <= rows; i++) {
        let str = "";
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
    }
export default equilateralTriangle;