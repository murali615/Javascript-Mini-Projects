let bmiForm = document.querySelector(".bmi-form");
bmiForm.addEventListener("submit", function (e) {
  //To prevent the default behavior of the form submission
  e.preventDefault();
  // e.target refers to the form element
  const form = e.target;

  // Access individual form elements using e.target
  const name = form.querySelector("#name").value;
  const weight =(form.querySelector("#weight").value);
  const height =(form.querySelector("#height").value);

  const heightInMeters=height/100;
  total=(weight/(heightInMeters**2));
  console.log(`=====================`)
  console.log("Write your logic here");
  //Write your logic here.
  //Logic begins
  let result;
  if(total<18.5)
    {
       console.log(`${name}${result=" You Are UnderWeight.So Improve Your Weight For Good Health👍"}`)

    }
    else if(total>=18.5&&total<=24.9)
    {   
        console.log(`${name}${result=" You Are NormalWeight.So Your Health is Good😊"}`)
            
    }
    else if(total>=25&&total<=29.9)
    {
       console.log(`${name}${result=" You Are OverWeight.So Improve Your Weight For Good Health👍"}`)

    }
    else{
        console.log(`${name}${result=" You Are Obese.So Improve Your Weight For Good Health👍"}`)
    }
  //Logic ends

  //Uncomment below code after writing your logic
  form.querySelector("#result").textContent = `${name}, You are ${result}`;
});

//Below code is reset the form - will explain later
document.querySelector("#reset").addEventListener("click", function (e) {
  bmiForm.querySelector("#name").value = "";
  bmiForm.querySelector("#weight").value = "";
  bmiForm.querySelector("#height").value = "";
  bmiForm.querySelector("#result").textContent = "";
});
