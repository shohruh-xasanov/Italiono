" use strict";

window.addEventListener("DOMContentLoaded", () => {

    const bars = document.querySelector('.bars'),
    navItem = document.querySelector('ul ul'),
    nav = document.querySelector('nav ul'),
    blockLink = document.querySelector('.block_item ul'),
    times = document.querySelector('.fa-times');

    bars.addEventListener('click', () => {
        navItem.classList.add("active");
        nav.style.display = 'block';
        blockLink.style.display = 'block';
    })
    times.addEventListener('click', () =>{
        navItem.classList.remove("active");
        nav.style.display = 'none';
        blockLink.style.display = 'none';
    })

    // CARUSELL..................

    const left = document.querySelector('.fa-angle-left'),
    right = document.querySelector('.fa-angle-right'),
    carusel = document.querySelectorAll('.box_carusel');
    let l = 0;

        right.onclick = () =>{
        l++;
    for(var i of carusel){     
        if(l==0) {i.style.left = "0px";}
        if(l==1) {i.style.left = "-380px";}
        if(l==2) {i.style.left = "-740px";}
        if(l==3) {i.style.left = "-1120px";}
        if(l==4) {i.style.left = "-1500px";}
        if(l > 4) {l = 4;}
        }
    }
     
    left.onclick = () =>{
        l--;
    for(var i of carusel){     
        if(l==0) {i.style.left = "0px";}
        if(l==1) {i.style.left = "-380px";}
        if(l==2) {i.style.left = "-740px";}
        if(l==3) {i.style.left = "-1120px";}
        if(l==4) {i.style.left = "-1500px";}
        if(l < 0) {l = 0;}
        }
    }
    
             //    MODALL............

            const modal = document.querySelector('.modals'),
            savat = document.querySelector('.fa-shopping-bag'),
            exit = document.querySelector('.modal_text b');
         
            savat.addEventListener('click', () => {
                modal.style.display = "block";
            })
            exit.addEventListener('click', () => {
                modal.style.display = "none";
            });
         
             //  SEARCH.................
         
            const input = document.querySelector('.corzina input'),
            exitSearch = document.querySelector('.corzina b'),
            search = document.querySelector('.fa-search');
         
            search.addEventListener('click', () =>{
                input.style.display = 'block';
                exitSearch.style.display = 'block';
                 
            })
            exitSearch.addEventListener('click', () =>{
                input.style.display = 'none';
                exitSearch.style.display = 'none';
            });




});