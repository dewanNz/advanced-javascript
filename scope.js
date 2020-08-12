// function sum (first, second){
//     let result = first + second;
//     return result;
// }
// const output = sum (10, 20);
// console.log(output);

let bonus = 20;
function sum (first, second){
    let result = first + second + bonus;
    console.log(bonus);
    return result;
}
const output = sum (10, 20);
console.log(output);
console.log(bonus);