function composicao(...fns){
    return function(valor){
        return fns.reduce(async (acc,fn)=>{
            if(Promise.resolve(acc)===acc) return fn(await acc);

            return fn(acc);
        },valor);
    }
}


function gritrar(texto){
    return texto.toUpperCase();
}
function enfase(texto){
    return `${texto} !!!!!!`;
}

const resultado = composicao(gritrar,enfase)('para');
resultado.then(console.log);