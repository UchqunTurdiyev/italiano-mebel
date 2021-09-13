" use strict";
    window.addEventListener("DOMContentLoaded", () => {

        const bars = document.querySelector('.bars'),
        navItem = document.querySelector('ul'),
        times = document.querySelector('.fa-times');

        bars.addEventListener('click', () => {
            navItem.classList.add("active");
        })
        times.addEventListener('click', () =>{
            navItem.classList.remove("active");
        })

    })
