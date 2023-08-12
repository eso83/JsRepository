const claculatorEl=document.getElementById("calculator"),
claculatorAppEl=document.getElementById("calculatorApp"),
closeBtnEl=document.getElementById("close"),
displayEl=document.getElementById("display"),
buttonsEl=document.querySelectorAll("button");


function clock(){
    var date =new Date();
    document.getElementById("hour").innerHTML=date.getHours();
    document.getElementById("minute").innerHTML=date.getMinutes();
};

setInterval( clock , 1000);
claculatorEl.addEventListener("click",function(){
    claculatorAppEl.classList.add("fadeIn")
});
closeBtnEl.addEventListener("click",function(){
    claculatorAppEl.classList.remove("fadeIn")
});
var drageValue;
function move(id){
    var claculatorAppEl=document.getElementById("calculatorApp");
    claculatorAppEl.style.position="absolute";
    claculatorAppEl.onmousedown=function(){
        drageValue=claculatorAppEl;
    }
}
document.ondblclick=function(e){
    var x = e.pageX;
    var y = e.pageY;
    drageValue.style.left= x + "px";
    drageValue.style.top= y +"px";
}
move();
buttonsEl.forEach((item)=>{
    item.onclick= ()=>{
        if(item.id=="clear"){
            displayEl.innerText=""
        } else if(displayEl.innerText!=""&& item.id=="equal"){
            displayEl.innerText=eval(displayEl.innerText)
        }
        else if(displayEl.innerText==""&& item.id==equal){
            displayEl.innerText="Empty!";
            setTimeout(()=>(displayEl.innerText=""),2000)
        }
        else{
            displayEl.innerText += item.id;
        }
    }
})