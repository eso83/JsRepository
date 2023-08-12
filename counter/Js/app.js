const counterEl=document.getElementById("counter"),
addEl=document.getElementById("add"),
minusEl=document.getElementById("minus");
 var counter = 0;
addEl.addEventListener("click", ()=>{
    counter +=100;
    counterEl.style.bottom= counter + "px" 
   
});
minusEl.addEventListener("click" ,()=>{

counter-=100;
counterEl.style.bottom=counter+"px"


} )