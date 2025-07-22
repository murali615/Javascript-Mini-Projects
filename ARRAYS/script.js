const arr=["murali","mahesh"]
console.log(arr)
console.log(`*********************`)

console.log(arr[0])
console.log(`*********************`)
arr[0]='praksh' //replaced with murali
console.log(arr)
console.log(`*********************`)
console.log(arr.at(-1)) //mahesh 
console.log(`*********************`)
console.log(arr[arr.length-1])//mahesh
console.log(`*********************`)


//arrys works as objects
const arr2=[...arr]
console.log(arr2)
arr2[0]=1;
console.log(arr2)
console.log(`*********************`)

// array constructor

/*  if give you single value the array take that value as length of the array so you give two values */
const arr1=new Array(10,10,100)
console.log(arr1)
console.log(`*********************`)

// Array.of(...)
let var1=Array.of(10,20,30,40,"murali")
console.log(var1)
console.log(`*********************`)

// Sparce array
let var2=[10,20,30,40,,,,"murali"]
console.log(var2)









