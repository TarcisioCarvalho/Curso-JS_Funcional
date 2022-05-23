function protFrango (gramas){
    return Number(gramas*0.31).toFixed(2);
}

//console.log(Number(protFrango(160))+Number(protFrango(170))+Number(protFrango(160))+Number(protFrango(180))+Number(protFrango(160)));
const refeicao1 = protFrango(820);
const refeicao2 = protFrango(180);
console.log(Number(refeicao1));