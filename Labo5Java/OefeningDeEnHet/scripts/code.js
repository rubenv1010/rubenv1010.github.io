const setup = () => {
    let paragraaf = "<p>Gisteren zat de jongen op de stoep en at de helft van de appel</p>";
    let woorden = paragraaf.split(" ");
    for (let i = 0; i < woorden.length; i++) {
        if (woorden[i] == "de") {
            woorden[i] = "het";
        }
    }
    paragraaf = woorden.join(" ");
    console.log(paragraaf);

}
window.addEventListener("load", setup);