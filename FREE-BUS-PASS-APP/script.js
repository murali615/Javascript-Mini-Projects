const BusSeat = document.getElementById("seatAvailable");
const Age = document.getElementById("ageAbove50");
const Adhaar = document.getElementById("hasAadhar");
const checkButton = document.getElementById("checkStatus");
const passengerStatus = document.getElementById("status");

checkButton.addEventListener("click", function () {
  let isSeatAvailable = BusSeat.checked;
  let isAgeAbove50 = Age.checked;
  let hasAadharCard = Adhaar.checked;
 //let BusSeat=prompt("Is Seat Available?");


/* if(BusSeat.toLowerCase(BusSeat)=='yes'&&Age.toLowerCase(Age)=='yes'&&Adhaar.toLowerCase(Adhaar)=='yes')
{
    console.log("You Are eligible")
}
else{
    console.log("You Are Noteligible")
} */
if(isSeatAvailable )
{    
    //let Age=prompt("Is Age Above 50?");

    if( isAgeAbove50 )
    {
      passengerStatus.textContent="you have a seat and your age is above 50 years but you dont have adhaar";
       //let Adhaar=prompt("Do You Have AdhaarCard?");
        if(hasAadharCard )
        {   
          passengerStatus.textContent="your have a seat and your age  is above 50 years and you have Adhaar. So please come inside the bus";
          let confirmmsg=confirm("Are you sure do you want to come inside?")
          if(confirmmsg)
          {
            alert("please come inside the bus")
          }

           console.log("Please come inside the bus 😊")
        }
        else if(!hasAadharCard )
        {  
            passengerStatus.textContent="you have a seat and your age is above 50 years but you dont have Adhaar";  
            console.log("Seat and Age is ok but you dont have Adhaar")
           
        }
      }
    else if(!isAgeAbove50)
    {   
      passengerStatus.textContent="you have a seat but your age is below 50 years and you dont have adhaar";  
       console.log("seat is available but you are below 50")
        
    }
   
}
 else if( !isSeatAvailable )
    {  
      console.log("Seat is not available")
      passengerStatus.textContent="you haven't a seat available So you are not enter";  
       
    }
    
});
