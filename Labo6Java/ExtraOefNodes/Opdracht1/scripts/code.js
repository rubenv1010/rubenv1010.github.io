const setup = () => {
   let pText = document.querySelectorAll("p")[0];
   let newTekst = document.createTextNode("Good job!");

   pText.replaceWith(newTekst);
    /* let par = document.querySelectorAll("p")[0];
    y = par.childNodes[0];
    par.removeChild(y);

    let textNode = document.createTextNode("good job");
    par.appendChild(textNode); */
};
window.addEventListener("load", setup);