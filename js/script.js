" use strict";

window.addEventListener("DOMContentLoaded", () => {
       // CARUSELL..................

       const left = document.querySelector('.fa-angle-left'),
       right = document.querySelector('.fa-angle-right'),
       carusel = document.querySelectorAll('.box_carusel');
       let l = 0;
   
           right.onclick = () =>{
           l++;
       for(var i of carusel){     
           if(l==0) {i.style.left = "0px";}
           if(l==1) {i.style.left = "-220px";}
           if(l==2) {i.style.left = "-440px";}
           if(l==3) {i.style.left = "-660px";}
           if(l==4) {i.style.left = "-880px";}
           if(l > 4) {l = 4;}
           }
       }
        
       left.onclick = () =>{
           l--;
       for(var i of carusel){     
           if(l==0) {i.style.left = "0px";}
           if(l==1) {i.style.left = "-220px";}
           if(l==2) {i.style.left = "-440px";}
           if(l==3) {i.style.left = "-660px";}
           if(l==4) {i.style.left = "-880px";}
           if(l < 0) {l = 0;}
           }
       }
        

    //          // CARUSELL..................

    //    const left2 = document.querySelector('.fa-angle-left'),
    //    right2 = document.querySelector('.fa-angle-right'),
    //    carusel2 = document.querySelectorAll('.box_carusel');
    //    let n = 0;
   
    //        right2.onclick = () =>{
    //        n++;
    //    for(var i of carusel2){     
    //        if(n==0) {i.style.left2 = "0px";}
    //        if(n==1) {i.style.left2 = "-220px";}
    //        if(n==2) {i.style.left2 = "-440px";}
    //        if(n==3) {i.style.left2 = "-660px";}
    //        if(n==4) {i.style.left2 = "-880px";}
    //        if(n > 4) {n = 4;}
    //        }
    //    }
        
    //    left.onclick = () =>{
    //        n--;
    //    for(var i of carusel){     
    //        if(n==0) {i.style.left2 = "0px";}
    //        if(n==1) {i.style.left2 = "-220px";}
    //        if(n==2) {i.style.left2 = "-440px";}
    //        if(n==3) {i.style.left2 = "-660px";}
    //        if(n==4) {i.style.left2 = "-880px";}
    //        if(n < 0) {n = 0;}
    //        }
    //    }
});