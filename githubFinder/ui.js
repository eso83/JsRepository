class UI{
    constructor(){
        this.profile=document.getElementById("profile")
    }
    show_data(user){
        this.profile.innerHTML=`
        <div class='card card-body mb-3'>
            <div class ="row">
               <div class="col-md-3">
                <img class="img-fluid mb-2" src="${user.avatar_url}">
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View profile</a>
               </div>
              <div class="col-md-9">
                <span style="background-color: skyblue;"  class=" badge badge-primary">Public Repos: 
                ${user.public_repos} </span>
                <span style="background-color: gray;" class="badge badge-secondary">Public Gists: 
                ${user.public_gists} </span>
                <span style="background-color: green;" class="badge badge-success">Followers: 
                ${user.followers} </span>
                <span style="background-color: blue;" class="badge badge-info">Following: 
                ${user.following} </span>
                <br><br>
                <ul class="list-group">
                <li class="list-group-item">Name: ${user.name}</li>
                  <li class="list-group-item">Company: ${user.company}</li>
                  <li class="list-group-item">Website/Blog: ${user.blog}</li>
                  <li class="list-group-item">Location: ${user.location}</li>
                  <li class="list-group-item">Member Since: ${user.created}
                  </li>
                </ul>
               </div>
            </div>        
        </div>
        <h3 class="page-heading mb-3"> Latest Repos</h3>
        <div id="repos"></div>
        `

    }
    clear_profile(){
        this.profile.innerHTML=""
    }
    show_alert(massage,className){
        this.clear_alert()
        const div = document.createElement("div")
        div.className=className;
        div.appendChild(document.createTextNode(massage));
        const container=document.querySelector(".searchContainer");
        const search= document.querySelector(".search");
        container.insertBefore(div, search);
        setTimeout(()=>{
            this.clear_alert();
        },2000)

    }
    clear_alert(){
        const alert = document.querySelector(".alert");
        if (alert){
            alert.remove()
        }
    }
}