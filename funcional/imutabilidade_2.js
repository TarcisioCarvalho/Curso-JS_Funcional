//Recursividade

const nums = [1,2,3,4,5,6,7];

function somar(array,total=0){
    if (array.length === 0 ) return total;

    console.log(total);
    return somar(array.slice(1),total + array[0]);
}

const total = somar(nums);
console.log(total);