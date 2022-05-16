/* function somar(n1){
    return function(n2){
        return function(n3){
            return n1+n2+n3
        }
    }
}

console.log(somar(3)(4)(5))

function calcular(n1){
    return function(n2){
        return function(fn){
            console.log('Teste')
             fn(n1,n2);
        }
    }
}

function sub(n1,n2){
    console.log('Teste2')
    return n1-n2;
}

console.log(calcular(3)(4)(sub));

function potenciacao(n1){
    return function(n2){
        return Math.pow(n1,n2);
    }
}

console.log(potenciacao(2)(3));

const potenciacao2 = (n1)=>(n2)=>Math.pow(n1,n2);

console.log(potenciacao2(2)(3)); */


const exec = (fn,n1,n2) => console.log(fn(n1,n2));
const somarNoTerminal = (n1,n2) => n1+n2;

exec(somarNoTerminal,4,8);
