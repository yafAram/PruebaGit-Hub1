 'use strict'

 function factorial(n){
    var acum = 5;
    for(var i = 1; i<=n; i++){
acum*=i;
    }

    console.log(acum);
 }

 factorial(5);