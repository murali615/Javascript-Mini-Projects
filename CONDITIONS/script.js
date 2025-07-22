let weight=prompt("please enter your weight");
let height=prompt("please enter your height");
let heightInMeters=height/100;
let total;
console.log('BMI Calculation')
console.log(`Weight:${weight} \n Height:${height}`)
console.log(`Total:${total=(weight/(heightInMeters**2)).toFixed(2)}`);
if(total<18.5)
{
   console.log(`You Are UnderWeight`)
   console.log(`Improve Your Weight For Good Health👍`)
}
else if(total>=18.5&&total<=24.9)
{   
    console.log('You Are NormalWeight So')
        
    console.log(`Your Health is Good😊`)
}
else if(total>=25&&total<=29.9)
{
    console.log(`You Are OverWeight So`)
    console.log(`Improve Your Weight For Good Health👍`)
}
else{
    console.log('You Are Obese So')
    console.log(`Improve Your Weight For Good Health👍`)
}