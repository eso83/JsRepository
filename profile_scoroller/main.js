const data=[
    {
        name:"rose doe",
        age:"28",
        image:"https://xsgames.co/randomusers/assets/avatars/female/61.jpg",
        gen:"female",
    },
    {
        name:"mike doe",
        age:"22",
        image:"https://xsgames.co/randomusers/assets/avatars/male/61.jpg",
        gen:"male",
    },
    {
        name:"Jack Anthony",
        age:"33",
        image:"https://xsgames.co/randomusers/assets/avatars/male/62.jpg",
        gen:"male",
    },
    {
        name:"mia martin",
        age:"20",
        image:"https://xsgames.co/randomusers/assets/avatars/female/40.jpg",
        gen:"female",
    }
];

const profiles= profileIterator(data);
nextProfile();
document.getElementById("next").addEventListener("click" , nextProfile)
function nextProfile(){
    const currentProfile =profiles.next().value;
    if(currentProfile !==undefined){
        document.getElementById("displayProfile").innerHTML=`
        <ul>
        <li>name:${currentProfile.name}</li>
        <li>age:${currentProfile.age}</li>
        <li>gender:${currentProfile.gen}</li>
        </ul>`
        document.getElementById("displayImg").innerHTML=`<img src="${currentProfile.image}">`
}else{
    //no more profile
    window.location.reload()
}
}

function profileIterator(profile){
    let nextIndex=0
    return {
        next: function(){
            return nextIndex <profile.length ?
            {value:profile[nextIndex++],done:false}:
            {done:true}
        }
    };
}