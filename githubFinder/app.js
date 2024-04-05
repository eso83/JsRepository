//init github
const github=new GitHub;
//init UI
const ui= new UI;

const searchUser=document.getElementById("searchUser");
searchUser.addEventListener("keyup", (e)=>{
    const userText=e.target.value;
    if ( userText!==""){
        github.getUser(userText).then(data=>{
            if (data.profile.message === 'Not Found'){
                //show alert
                ui.show_alert("user not found","alert alert-danger")
                
                
            }
            else{
                //show data
                ui.show_data(data.profile)
                console.log(data.profile)
            }
        })
    }
    else{
        //clear profile
        ui.clear_profile()
    }


})