const equilateralTriangle = (rows:number) => {
    for (let i:number = 1; i <= rows; i++) {
        let str:string = "";
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
    }
export default equilateralTriangle;