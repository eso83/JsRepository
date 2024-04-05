class UI{
    constructor(){
        this.page= document.getElementById("show")
    }
    show_data(country){
        this.page.innerHTML=`
        <h1>${country.name.common}</h1>
        <p> Area: ${country.area}</p>
        <p> Region: ${country.region}</p>
        <p> Population: ${country.population}</p>
        <p> Capital: ${country.capital}</p>
        <p> subregion: ${country.subregion}</p>
        <p> StartOfWeek: ${country.startOfWeek}</p>
        <p> Language: ${Object.values(country.languages)}</p>
        <img src=${country.flags.png}>
        <a href="${country.maps.googleMaps}" target="_blank"> get map </a>`
    }
    clear_data(){
        this.page.innerHTML=``
    }
}