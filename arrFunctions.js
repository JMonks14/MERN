var arrFunctions=[]
arrFunctions.push(function () {
    console.log("hello my friends");
})

arrFunctions.push(function() {
    for (let a=1;a<=10;a++) {
        console.log(a);
    }
})
arrFunctions.forEach(function(value) {
    value()
})