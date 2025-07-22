let para=document.getElementById("simpleapp")
let bt1=document.getElementById("inc")
let bt2=document.getElementById("dec")
let bt3=document.getElementById("reset")
count=0;
bt1.addEventListener("click",function(){
    para.textContent=count++;
})

bt2.addEventListener("click",function(){
    if(count>=0)
    {
     para.textContent=count--;
    }
 })
 bt3.addEventListener("click",function(){
    para.textContent=0;
    count=0;
})

