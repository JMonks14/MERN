function maths(no1=0,no2=0,opt="add") {
    let res=0
    switch(opt) {
        case "add":
            res=no1+no2
            break;
        case "sub":
            res=no1-no2
            break;
        case "mul":
            res=no1*no2
            break;
        case "div":
            res=no1/no2
            break;
        default:
            res="invalid operation"
    }
    console.log("result is ",res);
}
maths(2,4,"mul")
maths(9,3,"div")
maths(1,1,"fish")