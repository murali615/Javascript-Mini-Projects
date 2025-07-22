let RestaurentCustomer1=
{
  Name:'Murali',
  Age:20,
  Time:{12:43},
  Item:'chickenBirayani',
  Bill:80,
  DaysCount:2,
  Payement:'true',
  arr1:[1,2,3,4],
  wish(title)
  {    
    console.log(title)
    this.arr1.push(title)  //here is some catch
  
    console.log('hi hello')
  }
}
RestaurentCustomer1.wish()
console.log(RestaurentCustomer1)
RestaurentCustomer1.arr1.push(166)
RestaurentCustomer1.wish(55)



//call by reference using Object.assign
/* let RestaurentCustomer2=Object.assign({},RestaurentCustomer1)
Object.assign(RestaurentCustomer2,{Bill:120},{Name:'Suresh'})
RestaurentCustomer2.Bill=120
RestaurentCustomer2.Name='Suresh'
console.log(RestaurentCustomer2) */

// Object.assign with target for update property code reuse...
Object.assign(RestaurentCustomer1,{Bill:120},{Name:'Suresh'})

//spread operator {...objectname}
let RestaurentCustomer2={...RestaurentCustomer1}
RestaurentCustomer2.Bill=1200
RestaurentCustomer2.Name='prakash'
console.log(RestaurentCustomer2)



