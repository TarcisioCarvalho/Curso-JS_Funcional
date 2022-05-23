const numeros = [1,2,3,4,5,6,7,8,9,10];

function gerarElementos(array){
    return {
        iniciar(fn){
            let indice = 0;
            const i = setInterval(() => {
                if(indice === array.length) {
                    clearInterval(i);
                    return; 
                }
                fn(array[indice]);
                indice++;
            }, 1000)

            return {
                parar(){
                    clearInterval(i);
                }
            }
        }

       
    }
}


const temp1 = gerarElementos(numeros);
const exec1 = temp1.iniciar(n=> console.log(Math.pow(2,n)));


setTimeout(()=> exec1.parar(),5000);
