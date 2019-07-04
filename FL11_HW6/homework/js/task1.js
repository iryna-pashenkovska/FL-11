let str = prompt('Please enter 3 point`s numeric value separated by comma (a1,a2,b1,b2,c1,c2):');
let coordinatesAmount = 6;
let array = str.split(',', coordinatesAmount);

if(array.length !== coordinatesAmount){
    throw new Error('Not enought input data or wrong input format');
}

for(let i=0; i<array.length; i++) { 
    array[i] = +array[i];
    if(isNaN(array[i])){
        throw new Error(`element #${i+1} is NaN`);
    }
}

let result = true;

let pointBShift = 2;
let pointCShift = 4;

let loopsNumber = 2;
let divisor = 2;

for(let i=0; i<loopsNumber; i++) { 
    result = result && (array[i]+array[i+pointBShift])/divisor === array[i+pointCShift]
}

console.log(result)