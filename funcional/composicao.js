function composicao(...fns){
    return function(valor){
        return fns.reduce((acc,fn)=>fn(acc),valor);
    }
}


function gritrar(texto){
    return texto.toUpperCase();
}
function enfase(texto){
    return `${texto} !!!!!!`;
}

const resultado = composicao(gritrar,enfase)('para');
console.log(resultado);