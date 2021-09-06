" use strict";

window.addEventListener("DOMContentLoaded", () => {
   const owlCarusel = document.querySelectorAll('.carusel_show'),
   caruselActive = document.querySelector('.carusel_active'),
   right = document.querySelector('.right');

    function owl(){
            caruselActive.classList.add('carusel__js')
    }
    owl();

   right.addEventListener('click',() => {
           caruselActive.classList.add('active');
           owlCarusel.forEach(item, i => {
               item.style.display = 'none';
           })
        
   })
});