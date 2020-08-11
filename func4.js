function operation(day) {
    let f = function(){}
    switch(day) {
        case 1:
            f=function() {
                for (let a=1;a<=10;a++) {
                    console.log(a);
                }
            }
            break;
        case 2:
            f = function() {
                console.log("hello");
                console.log(" my");
                console.log(" friends");
            }
            break;
        default:
            f = function() {
                console.log("invalid input");
            }
        break;
    }
    return f;

}

let fun = operation(1)
fun()