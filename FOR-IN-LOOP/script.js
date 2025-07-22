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
RestaurentCustomer1.wish();
  for(let key in RestaurentCustomer1)
  {
    console.log(key)
  }
  for(let key in RestaurentCustomer1)
 {
      console.log(key)
 }
 for(let key in RestaurentCustomer1)
    {
        console.log(key,RestaurentCustomer1)
    }
    for(let key in RestaurentCustomer1)
    {
            console.log(key,RestaurentCustomer1[key])
    }