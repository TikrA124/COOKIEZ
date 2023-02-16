// JS CODE FOR LIGHTMODE AND DARKMODE

var btndark = document.querySelector(".dark");
var btnbright = document.querySelector(".bright");
var body = document.querySelector(".body");

btndark.addEventListener("click", darkmode);

function darkmode(){
    var body = document.querySelector(".body");
    body.style.backgroundColor = "rgb(22, 22, 29)";
    body.style.color = "whitesmoke"
}

btnbright.addEventListener("click", brightmode);

function brightmode(){
    var body = document.querySelector(".body");
    body.style.backgroundColor = "white";
    body.style.color = "black"
}

// JS CODE FOR RESPONSIVENESS

var navbartoggler = document.querySelector(".navbartoggler");
var navmenu = document.querySelector(".unorderedlist");
var navlinks = document.querySelector("a.links")

navbartoggler.addEventListener("click", togglefunction);

function togglefunction(){
    navbartoggler.classList.toggle("open-navbartoggler");
    navmenu.classList.toggle("open")
}
