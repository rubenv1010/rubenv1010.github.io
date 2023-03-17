const Create = () => {
    let paragraaf = document.createElement("p");
    let f = document.createTextNode("paragraaf");
    paragraaf.appendChild(f);
    document.getElementById("myDIV")
        .appendChild(paragraaf);
};
const setup = () => {
    document.getElementById("btnCreate").addEventListener("click",Create);
};
window.addEventListener("load", setup);