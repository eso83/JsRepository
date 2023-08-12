const checkBoxEl=document.getElementById("Btn");
checkBoxEl.addEventListener("click",()=>{
    document.body.classList.toggle("darkBg");
    checkBoxEl.classList.toggle("darkCheckbox")
})