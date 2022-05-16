const pessoa = {
    nome:'Maria',
    altura:1.76,
    cidade:'São Paulo'
};

const novaPessoa = {...pessoa};

novaPessoa.altura=1.55;

console.log(pessoa);