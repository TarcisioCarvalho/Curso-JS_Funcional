const carrinho =[
    {nome:'Caneta',qtde:10,preco:7.99},
    {nome:'Impressora',qtde:0,preco:650.99},
    {nome:'Caderno',qtde:4,preco:27.99},
    {nome:'Lapis',qtde:3,preco:4.99},
    {nome:'Tesoura',qtde:1,preco:19.99}
];

Array.prototype.meuMap = function(fn){
    const novoArray =[];

    for(let i=0;i < this.length;i++){
        novoArray.push(fn(this[i],i,this));
    }
    return novoArray
}


function nome(produto){
    return produto.nome;
}

const volume = produto => produto.qtde*produto.preco;

console.log(carrinho.meuMap(nome));
console.log(carrinho.meuMap(volume));