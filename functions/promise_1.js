
let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(3);
});

console.log(p);
p.then((valor)=>{
    console.log(valor);
})