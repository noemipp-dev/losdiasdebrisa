//poner el año actual en el footer
let currentYear = new Date().getFullYear();
document.getElementById("spanAnioActual").textContent = currentYear;

//botón que lleva a Amazon libro A
let bVerEnAmazon = document.getElementById("bVerEnAmazon");

bVerEnAmazon.onclick = function () {
    window.open('https://www.amazon.es/dp/B0H96NFML3', '_blank')
}