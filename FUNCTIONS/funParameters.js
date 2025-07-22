function funcAge(name,age)
{   console.log(`${name} age is ${age||`Not Entered`}`)
    console.log(`Thank you for your Answering`)
    console.log(`Please Subscribe to my channel`)
}
let sureshAge=prompt(`What is your Age`)
funcAge(`suresh`,sureshAge);
let maheshAge=prompt(`What is your Age`)
funcAge(`mahesh`,maheshAge);
let venkatAge=prompt(`What is your Age`)
funcAge(`venkat`,venkatAge);
