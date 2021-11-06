" use strict";

window.addEventListener("DOMContentLoaded", () => {

    const bars = document.querySelector('.bars'),
    navItem = document.querySelector('ul'),
    times = document.querySelector('.fa-times'),
    main = document.querySelector('main');
    input = document.querySelector('.corzina input'),
    exitSearch = document.querySelector('.corzina b'),
    blockItem = document.querySelector('.block_item h4'),
    search = document.querySelector('.fa-search');

    bars.addEventListener('click', () => {
        navItem.classList.add("active");
        main.classList.add("main_none");
        blockItem.style.display = 'block';
    })
    times.addEventListener('click', () =>{
        navItem.classList.remove("active"),
        main.classList.remove("main_none");
        blockItem.style.display = 'none';
    })

    
    search.addEventListener('click', () =>{
        input.style.display = 'block';
        exitSearch.style.display = 'block';
    })
    exitSearch.addEventListener('click', () =>{
        input.style.display = 'none';
        exitSearch.style.display = 'none';
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
        
    //    MODALL............

    const modal = document.querySelector('.modal'),
    savat = document.querySelector('.fa-shopping-bag'),
    exit = document.querySelector('.modal_text b');

    savat.addEventListener('click', () => {
        modal.style.display = "block";
    })
    exit.addEventListener('click', () => {
        modal.style.display = "none";
    });
     
      
     
});