let BusSeat=prompt("Is Seat Available?");


/* if(BusSeat.toLowerCase(BusSeat)=='yes'&&Age.toLowerCase(Age)=='yes'&&Adhaar.toLowerCase(Adhaar)=='yes')
{
    console.log("You Are eligible")
}
else{
    console.log("You Are Noteligible")
} */
if(BusSeat.toLowerCase(BusSeat)=='yes')
{   
    let Age=prompt("Is Age Above 50?");

    if(Age.toLowerCase(Age)=='yes')
    {   let Adhaar=prompt("Do You Have AdhaarCard?");
        if(Adhaar.toLowerCase(Adhaar)=='yes')
        {    console.log("Please come inside the bus 😊")
            alert("Please come inside the Bus")
        }
        else if(Adhaar.toLowerCase(Adhaar)=='no')
        {    console.log("Seat and Age is ok but you dont have Adhaar")
            alert("Sorry You can't come inside the bus")
        }
        else
        {
            alert("Please type Yes or No")
        }
    }
    else if(Age.toLowerCase(Age)=='no')
    {    console.log("seat is available but you are below 50")
        alert("Sorry You can't come inside the bus")
    }
    else
    {
        alert("Please type Yes or No")
    }
}
 else if(BusSeat.toLowerCase(BusSeat)=='no')
    {  console.log("Seat is not available")
        alert("Sorry You can't come inside the bus")
    }
    else
    {
        alert("Please type Yes or No")
        
    }



