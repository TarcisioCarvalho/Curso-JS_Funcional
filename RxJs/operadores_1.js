// Dois tipos
// Operadores de Criação
const { of } = require('rxjs');
// Operadores Encadeaveis (Pipeable op.)
const { last,map } = require('rxjs/operators');

of(1,2,'ana',false,'último')
.pipe(
    last(),
    map(valor => valor[0])

)
.subscribe(function (valor){
    console.log(`O Valor é ${valor}`);
})