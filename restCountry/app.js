const country=new Country();
const ui= new UI()
const searchUser = inputEl.value;
submitEl.addEventListener("click", ()=>{
    const searchUser = inputEl.value
    if (searchUser==""){
        alert("enter the name of country ")
        ui.clear_data()
    }
    else{
    country.call(searchUser).then(data=>{
        console.log(data.profile)
        ui.show_data(data.profile[0])
    }).catch(err=>{
        alert(err)
    })

}

})