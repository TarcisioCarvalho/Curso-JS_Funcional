function textoComTamanhoEntre(min){
    return function(max){
        return function(erro){
            return function(texto){
                const tamanho = (texto || '').trim().length;

                 if(tamanho<min || tamanho>max) throw erro;
            }
        }
    }
    
}


function aplicarValidacao(fn){
    return function(valor){
        try {
            fn(valor)
        } catch (e) {
            throw {error:e}
        }
    }
}

const p1 = {nome:'A',preco:14.99,desc:0.25};
const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255);
const forcarNomeProdutoValido = forcarTamanhoPadrao('nome inválido');
const validarNomeProduto = aplicarValidacao(forcarNomeProdutoValido);
apli(p1.nome);