 let weight=prompt("please enter your weight");
let height=prompt("please enter your height"); //cm
console.log(weight,'\n',height)
//type conversion
console.log('type converion')
let TypeConvHeight=Number(height)
console.log(TypeConvHeight)
console.log('without type conversion it work only when performing some operation on it')
let heightInMeters=(Number(height)/100);//meters//some times cant covert strings to integer so we shoult type conversion like height='100' 


console.log('BMI Calculation')
console.log(weight,'\n',height)
console.log((weight/(heightInMeters**2)).toFixed(2)); //display the output in string
// use Strict mode;
/* 'use strict';
let var1=50;
let var2=20;
total1=67;
console.log(total1)
console.log(`Total is ${total=var1-var2}`)
console.log(total) */