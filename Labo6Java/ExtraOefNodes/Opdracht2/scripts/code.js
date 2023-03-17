const setup = () => {


    let items = document.getElementsByTagName('li');
    for (var i = 0; i < items.length; i++) {
       // items[i].className = 'listitem';
        items[i].setAttribute("class","listitem")
    }

    let foto = document.createElement('img');
    foto.setAttribute ("src", 'download.jpg');

    document.querySelector("body").appendChild(foto);
};
window.addEventListener("load", setup);