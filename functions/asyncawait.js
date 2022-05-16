
async function geraMegaSena(qtdNumeros){
    const numeros = [];
    for(let _ of Array(qtdNumeros).fill()){
       numeros.push(await geraNumerosAleatorios(1,60,numeros));
    }
    return numeros;
}


function geraNumerosAleatorios(min,max,proibidos){
    if(min>max) [min,max]=[max,min];

    return new Promise((resolve,reject)=>{
        const fator = max - min + 1;
        const aleatorio = parseInt(Math.random()*fator) + min;
        if(proibidos.includes(aleatorio)) reject('Número repetido');

        resolve(aleatorio);
    })
}
/* 
geraNumerosAleatorios(0,5,[2,3])
.then(console.log)
.catch(console.log) */

geraMegaSena(20)
.then(console.log)
.catch(console.log);