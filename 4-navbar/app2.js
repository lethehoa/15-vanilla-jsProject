document.querySelector('.close').addEventListener('click', showLinks);

document.querySelector('.hamburger').addEventListener('click', showHideLinks);

function showHideLinks() {

}

function showLinks() {
   document.querySelector('nav').style.width = "0px";
   document.querySelector('.hamburger').style.width = "100vw";
}