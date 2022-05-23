// wrapper 
// São objetos que implementam a função map.
// Que também é um wrapper de um valor.
// Array é um exemplo de functor.


function tipoSeguro(valor){
    return{
        valor,
        invalido(){
            this.valor === null || this.valor === undefined;
        },
        map(fn){
            if(this.invalido()) return tipoSeguro(null);
            return tipoSeguro(fn(valor)); 
        },
        flatMap(fn){
            if(this.invalido()) return null;
            return fn(valor); 
        }
    }
}


const resultado = tipoSeguro('resultado')
.map(t=> t.toUpperCase())
.map(t=> `${t} !!!`)
.flatMap(t => t.split('').join(' '));

console.log(resultado);