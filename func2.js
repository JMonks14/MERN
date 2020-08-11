// function multiply() {
//     let ret=1
//     let i=0
//     while(i<arguments.length){
//     ret*=arguments[i]
//     i++}
//     console.log("Total product: ",ret);
// }
// multiply(5,9,1,7,3,5)
function findMax() {
    let ret = 0
    let i = 0
    while (i<arguments.length) {
        let n=arguments[i]
        if (n > ret) {ret=n;} 
        i++
    }
    console.log("Highest number: ",ret);
    return ret;
}
findMax(5,59,8,45,1,314,7,5)

function highest3() {

    let i=0
    let args=[]
    while(i<arguments.length) {
        args.push(arguments[i])
        i++
    }
    args.sort(function(a, b){return a - b});
    args.reverse()
    console.log(args);
    let ret1=args[0]
    let ret2=args[1]
    let ret3=args[2]
    
    // while (i<arguments.length) {
    //     let n=arguments[i]
    //     if (ret1 < n) {
    //         ret1=n
    //     }else if (ret2 < n) {
    //         ret2=n
    //     } else if (ret3 < n) {
    //         ret3=n
    //     }
    //     i++
    // }
    console.log("Highest 3: ",ret1,ret2,ret3);
}
highest3(3,3,654,8,45,7,9,2,7,2)