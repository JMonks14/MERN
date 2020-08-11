let add=function (a,b) {
    console.log(a, " + ",b, " = ",(a+b));
}
let sub=function (a,b) {
    console.log(a, " - ",b, " = ",(a-b));
}
function maths(ref) {
    ref(10,20)
}
function maths2(ref1,ref2,n1,n2) {
    ref1(n1,n2)
    ref2(n1,n2)
}

maths(add)
maths2(add,sub,9,4)