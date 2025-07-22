let sum=0;
function funcAge(name,age)
{   console.log(`${name} age is ${age||`Not Entered`}`)
    sum=sum+age;
    console.log(`current total age is :${sum}`)
    console.log(`Thank you for your Answering`)
    console.log(`Please Subscribe to my channel`)
}
let sureshAge=Number(prompt(`What is your Age`))
funcAge(`suresh`,sureshAge);
let maheshAge=Number(prompt(`What is your Age`))
funcAge(`mahesh`,maheshAge);
let venkatAge=Number(prompt(`What is your Age`))
funcAge(`venkat`,venkatAge);
