//Uma função pura é uma função em que o valor
//de retorno é determinado apenas pelos seus valores
//de entrada, sem efeitos colaterais observaveis

const PI = 3.14;
// Impura Raio é externo a função.
function areaCirc(raio){
    return raio*raio*PI;
}

console.log(areaCirc(10));