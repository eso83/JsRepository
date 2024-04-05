document.querySelector(".name-input").addEventListener("blur",validateName)
document.querySelector(".email-input").addEventListener("blur",validateEmail)
document.querySelector(".phone-input").addEventListener("blur",validatePhone)

function validateName(){
    const name=document.getElementById("name");
    const re=/^[a-zA-Z]{2,10}$/;
    if (re.test(name.value)==false){
       name.style.border="2px solid red"
       document.getElementById("name-error").innerHTML="name must be between 2 and 10 character"       
    }
    else{
        document.getElementById("name-error").innerHTML=""
        name.style.border="2px solid green"
    }
    
}
function validateEmail(){
    const email=document.getElementById("email");
    const re=/^([a-zA-Z0-9_\-\.]+)@([A-Za-z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (re.test(email.value)==false){
       email.style.border="2px solid red"
       document.getElementById("email-error").innerHTML="Enter correct email"       
    }
    else{
        document.getElementById("email-error").innerHTML=""
        email.style.border="2px solid green"
    }
    
}
function validatePhone(){
    const phone=document.getElementById("phone");
    const re=/09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/;
    if (re.test(phone.value)==false){
       phone.style.border="2px solid red"
       document.getElementById("phone-error").innerHTML="Enter correct phone number"       
    }
    else{
        document.getElementById("phone-error").innerHTML=""
        phone.style.border="2px solid green"
    }
    
}
