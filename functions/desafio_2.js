
const carrinho =[
    {nome:'Caneta',qtde:10,preco:7.99,fragil:true},
    {nome:'Impressora',qtde:1,preco:650.99,fragil:true},
    {nome:'Caderno',qtde:4,preco:27.99,fragil:false},
    {nome:'Lapis',qtde:3,preco:4.99,fragil:false},
    {nome:'Tesoura',qtde:1,preco:19.99,fragil:true}
];

const getFragil = produto => produto.fragil
const fragil = carrinho.filter(getFragil);
console.log(fragil);
const getQtdePreco = produto => produto.qtde*produto.preco
const qtdePreco = fragil.map(getQtdePreco);
console.log(qtdePreco);
/* const getMedia = (acc,el,indice,array) =>{
    console.log(indice);
    console.log(array.length);
    console.log(acc);
    if((indice+1) === array.length) {
        console.log(indice);
        return (acc+el)/array.length;
    }
    return acc+el;
}
const media = qtdePreco.reduce(getMedia,0);
console.log(media); */

const mediaInicial = {qtde:0,total:0,media:0};
const getMedia = (acc,el)=>{
    const novaQtde = ++acc.qtde;
    console.log(novaQtde);
    const novoTotal = acc.total+el;
    return{
        qtde:novaQtde,
        total:novoTotal,
        media:novoTotal/novaQtde
    }
}
const media = qtdePreco.reduce(getMedia,mediaInicial);
console.log(media.media);
