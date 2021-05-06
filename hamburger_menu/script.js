var hamburger = document.querySelector('.hamburger')
var cross = document.getElementById('cross')
var linkcontainer = document.querySelector('.links-container')
hamburger.addEventListener("click", funt)
cross.addEventListener("click", funt)
function funt(){
    linkcontainer.classList.toggle('shows')    
}
