
window.addEventListener('scroll', ()=>{
    var header = document.querySelector('#header');
    header.classList.toggle('scrolling', window.scrollY > 500);
});

var burguerMobile = document.querySelector('#open-menu');
var containerMobile = document.querySelector('.container-mobile');
var menuMobile = document.querySelector('.menu-mobile');

// Abrir menu mobile
burguerMobile.addEventListener('click', ()=> {
    containerMobile.classList.toggle('open');
    // menuMobile.classList.toggle('open');
})
