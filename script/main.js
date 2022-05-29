'use strict'

function mainFunction(callback){
    let a = +prompt('Число ') 
    let b = +prompt ('Степень')
callback(a,b);
}

function exponentiation(a1,b1){
let c = a1 ** b1;
alert(c);
}

mainFunction ( exponentiation );
