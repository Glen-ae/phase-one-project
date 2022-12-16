document.addEventListener('DOMContentLoaded', function() {
    getCars();
    carsDetails();
  
});
// this is where the fetch request is made to the server.
function getCars() {
    fetch('http://localhost:3000/cars')
        .then(res => res.json())
        .then(specifyCars);
}

function specifyCars(cars){
    cars.forEach(carsList)
};


















let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active')
    menu.classList.remove('active')
}


let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');
    search.classList.remove('active');
}

//hide menu
window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');
}

//header
let header = document.querySelector('header');

window.addEventListener('scroll' , () =>{
    header.classList.toogle('shadow', window.scrollY >0);
});