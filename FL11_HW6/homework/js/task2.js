let str = prompt('Please enter 3 tringle`s sights length (a,b,c):');
let sideNumber = 3;
let array = str.split(',', sideNumber);
let side1index = 0, side2index = 1, side3index = 2;
if(array.length !== sideNumber){
    throw new Error('Not enought input data or wrong input format');
}

for(let i=0; i<array.length; i++) { 
    array[i] = +array[i];
    if(isNaN(array[i])){
        throw new Error(`element #${i+1} is NaN`);
    }
}

let side1 = array[side1index], side2 = array[side2index], side3 = array[side3index];

let result = '';

if(side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2){
    result = 'Triangle doesn`t exist';
} else if (side1 === side2 && side1 === side3 && side2 === side3){
    result = 'Equivalent triangle';
} else if (side1 === side2 && side1 !== side3 && side2 !== side3 ||
           side1 === side3 && side2 !== side3 && side1 !== side2 ||
           side2 === side3 && side1 !== side2 && side1 !== side3){
            result = 'Isosceles triangle';
} else{
    result = 'Normal triangle';
}

console.log(result);
