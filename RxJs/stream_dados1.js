function gerarNumeros(){
    return {
        iniciar(fn,intervalo=1000){
            let num = 0;

           const i = setInterval(()=>{
            fn(num++)
           },intervalo)

           return {parar(){
               clearInterval(i);
           }}
        }
    }
}

const p1 = gerarNumeros();
const p2 = gerarNumeros();
const exec1 = p1.iniciar(numero => console.log(numero*2),1000);
const exec2 = p2.iniciar(numero=>console.log(numero + 100),2000);

setTimeout(()=>exec1.parar(),10000);
setTimeout(()=>exec2.parar(),5000);