const cardWidth = 500,
degIncrement = 6,
cardEl=document.getElementById("card");

const getRotateDeg = (input)=>{
    if(input < cardWidth * 0.33){
        return`-${degIncrement*3}deg`;
    }
    else if(
        input>=cardWidth * 0.33 &&
        input<cardWidth*0.66
    )
    {
    return`-${degIncrement}deg`;
    }
    else if(
        input>=cardWidth *0.66 &&
        input< cardWidth *0.5
    ) 
    {
    return "0deg"
    }
    else if(
        input>=cardWidth*0.5&&
        input <cardWidth *0.33
    )
    {
        return`${degIncrement}deg`
    }
    else {
         return `${degIncrement *3}deg`;
        }

};
const onMouseMove=(event)=>{
    const {target}=event;
    const rect =
    target.getBoundingClientRect();
    const rotateX =getRotateDeg(
        event.clientY - rect.top
    );
    const rotateY = getRotateDeg( 
    event.clientX-rect.left
    );
    cardEl
    .style
    .transform=
      `rotateX(${rotateX}) 
       rotateY(${rotateY})`
};
const onMouseLeave=()=>{
    cardEl.style.transform=`none`
}