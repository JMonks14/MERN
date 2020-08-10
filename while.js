let a =1
QA: while(a<=10) {
    let b=1;
    a++;
    
    QAC: while (b<=10) {
        b++
        if (b==5){
        continue QAC;
        }
        console.log(b);
        
    }
    console.log("....",a);
    
}