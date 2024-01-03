
let number=[1,3,4,5,6,7,8,9];
let sum=0;

function adder(number){
  sum+=number;
}
number.forEach(adder);
console.log(sum);
