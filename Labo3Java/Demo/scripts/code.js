const setup = () => {
    let btnTry = document.getElementById("btnTry");

    btnTry.addEventListener("mouseover", mouseHover);
    btnTry.addEventListener("click", onclick);
    btnTry.addEventListener("mouseout",mouseOut);

    //evetnlisterner CSS
    document.getElementById("btnWithoutBullets").addEventListener("click", withoutBullets);

    document.getElementById("btnWithBullets").addEventListener("click", withBullets);

    //eventListeners difference between "textContent" and "innerHTML"

    // document.getElementById("btnContent").addEventListener("click", changeContent);
}
// mouseHoverFunction
const mouseHover = () => {
    document.getElementById("event").innerHTML += "Mouse Hovered! <br>";
}
// mouseClickFunction
const onclick = () => {
    document.getElementById("event").innerHTML += "Mouse Clicked! <br>";
}
// MouseOutFunction
const mouseOut = () => {
    document.getElementById("event").innerHTML += "Mouse Out! <br>";
}

//changeCSS
const withoutBullets = () => {
    let i;
    let listItems = document.getElementsByTagName("li");
    for(i=0; i < listItems.length; i++){
        /*
              //eerste manier (slechte manier niet gebruiken)
              listItems[i].style.listStyleType="none";
              listItems[i].style.backgroundColor="red";
        */
        //tweede manier die classnamen komen vanuit style.css
        //listItems[i].className = "listItemsStyleNone colorRed"

        //3de manier
        listItems[i].classList.add("ListItemsStyleNone");
            listItems[i]
    }
}
const withBullets = () => {
    let i;
    let listItems = document.getElementsByTagName("li");
    for(i=0; i < listItems.length; i++){
        /*
            //eerste manier (slechte manier niet gebruiker)
            listItems[i].style.listStyleType="disc";
            listItems[i].style.backgroundColor="white";
        */
        //tweede manier die classnamen komen vanuit style.css
        listItems[i].className = "listItemsStyleDisc colorWhite"

    }
}
window.addEventListener("load", setup);