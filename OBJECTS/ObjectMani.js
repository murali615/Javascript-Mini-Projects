let Obj={
  Name:'Dhoni',
  Age:46,
  Occupation:'criketer',
  Nationality:'Indian',
  1:'handsome', // access uisng Square Brackets
  undefined:'married',// access uisng Square Brackets
  "god of cricketer":'Dhoni'

}
console.log(Obj)
console.log(`he is from ${Obj.Nationality}`)
console.log(`he is Good ${Obj.Occupation}`) 
console.log(`${Obj["god of cricketer"]}`)
console.log(`${Obj[1]}`)
console.log(`${Obj[undefined]}`)
delete Obj.undefined
console.log(Obj.undefined)
console.log(Obj)

/*
here some Disadvanatges
let Obj={
    Name:'Dhoni',
    Age:46,
    Occupation:'criketer',
    Nationality:'Indian',
  }
console.log(Obj)
let Obj1=Obj
Obj1.Salary=10000000
console.log(Obj1) */

