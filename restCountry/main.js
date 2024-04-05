const submitEl=document.getElementById("submit");
const inputEl=document.getElementById("search")
class Country{
async  call(name){
    const getData= await fetch(`https://restcountries.com/v3.1/name/${name}`)
    const profile= await getData.json()
    return{
        profile
    }
}
}
