function menuBurger() {
    if (document.getElementById("azerty").style.display == "none") {
        document.getElementById("azerty").style.visible = "visible";
        document.getElementById("azerty").style.display = "block";
    } else {
        document.getElementById("azerty").style.visible = "hidden";
        document.getElementById("azerty").style.display = "none";
    }
}