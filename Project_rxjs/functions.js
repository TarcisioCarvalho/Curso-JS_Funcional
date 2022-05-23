
const fs = require('fs');
const path = require('path');
const { Observable } = require('rxjs');

function lerPasta(caminho){
   return new Observable(subscriber=>{
try {

     fs.readdirSync(caminho).forEach(arquivo=> {
         subscriber.next(path.join(caminho,arquivo));
     })

    subscriber.complete();
    
} catch (error) {
    subscriber.error(error);
}
   })
}

function filtraArquivosTerminadosCom(padrao){
    return createPiepeableOperator(subscriber=>({
        next(texto){
            if(texto.endsWith(padrao)) subscriber.next(texto)
        }
    }))
}

/* function filtraArquivosTerminadosCom(padrao){
   return function(array){
    return array.filter(el=> el.endsWith(padrao));
   }
} */

/* fs.readFile(caminho,(erro,dados)=>{
    resolve( dados.toString());
});
 */

function lerArquivo(caminho){
    return new Promise((resolve,reject)=>{
        try {
            const conteudo = fs.readFileSync(caminho,{encoding:'utf-8'});
            resolve(conteudo.toString());
        } catch (error) {
            reject(error);
        }
    })
}

function lerArquivos(caminhos){
    return Promise.all(caminhos.map(caminho => lerArquivo(caminho)));
}

function removerSeVazio(array){
    return array.filter(el => el.trim());
}

function removerSeIncluir(padraoTextual){
    return function (array){
        return array.filter(el => !el.includes(padraoTextual));
    }
}

function removerSeApenasNumero(array){
    return array.filter(el => !parseInt(el));
}

function removerSimbolos(simbolos){
    return function(array){
        return array.map(el => {
            return simbolos.reduce((acc,simbolo)=>{
                return acc.split(simbolo).join('');
            },el)
            let textoSemSimbolos = el;
            simbolos.forEach(simbolo => {
              textoSemSimbolos = textoSemSimbolos.split(simbolo).join('');
            });
            return textoSemSimbolos;
        })
    }
}

function mesclarElementos(array){
    return array.join(' ');
}



function separaTextoPorSimbolo(simbolo){
    return function(texto){
        return texto.split(simbolo);
    }
}

function agruparElementos(palavras){
    return Object.values(palavras.reduce((acc,palavra)=>{

        const el = palavra.toLowerCase();
        const qtde = acc[el]? acc[el].qtde+1 : 1;
        acc[el] = {Elemento:el,qtde}
        return acc;
    },{}))
}

function ordernarAtributoNumerico(atributo){
    return function(array){
        const desc = (obj1,obj2)=>obj2[atributo]- obj1[atributo]; 
        return [...array].sort(desc);
    }
}

function composicao(...fns){
    return function(valor){
        return fns.reduce(async (acc,fn)=>{
            if(Promise.resolve(acc)===acc) return fn(await acc);

            return fn(acc);
        },valor);
    }
}

function createPiepeableOperator(operatorFn){
    return function(source){
        return  Observable.create(subscriber=>{
            const sub = operatorFn(subscriber);
            source.subscribe({
                next: sub.next,
                error: sub.error || (e=> subscriber.error(e)),
                complete: sub.complete || (e => subscriber.complete(e))
            })
        })
    }
}

module.exports={
    lerPasta,
    filtraArquivosTerminadosCom,
    lerArquivos,
    removerSeVazio,
    removerSeIncluir,
    removerSeApenasNumero,
    removerSimbolos,
    mesclarElementos,
    separaTextoPorSimbolo,
    agruparElementos,
    ordernarAtributoNumerico,
    composicao
};