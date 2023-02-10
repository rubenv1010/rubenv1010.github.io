const setup = () => {

    let lblCursus = document.getElementById("lblCursus");
    lblCursus.addEventListener("mouseover", change);

    let btnSend = document.getElementById("btnSend");
    btnSend.addEventListener("click", show);

}

const show = () => {
    let txtName = document.getElementById("txtName");

    if (txtName.value != "")
    {
        alert ("jouw naam is " + txtName.value);

        /*console.log("jouw naam is" + txtName.value) contactineren */
        console.log (`jouw naam is ${txtName.value}`); /*andere manier contactineren*/
    }
    else
    {
        alert ("gelieve een naam in te geven");
    }
}

const change = () => {
    let lblCursus = document.getElementById("lblCursus");
    lblCursus.className = "cursus";              /*klassnaam toekennen*/
}
window.addEventListener("load", setup);