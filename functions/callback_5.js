
const carrinho =[
    {nome:'Caneta',qtde:10,preco:8},
    {nome:'Impressora',qtde:0,preco:10},
    {nome:'Caderno',qtde:4,preco:20},
    {nome:'Lapis',qtde:3,preco:5},
    {nome:'Tesoura',qtde:1,preco:100}
];


const total = item => item.qtde*item.preco;
const soma = (acc,el)=> acc+el;
const resultado = carrinho.map(total);
console.log(resultado);
const resultadoSoma = resultado.reduce(soma,0);
console.log(resultadoSoma.toFixed(2));


Array.prototype.meuReduce = function(fn,inicial){
    let acc = inicial;

    for(let i=0;i<this.length;i++){

        if(!acc && i ===0) {
            acc = this[i]
            continue
        }
        
        console.log(acc,this[i]);
        acc = fn(acc,this[i]);
    }

    return acc

}

const resultadoSoma2 = resultado.meuReduce(soma);
console.log(resultadoSoma2);