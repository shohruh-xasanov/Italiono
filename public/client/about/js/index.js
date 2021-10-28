" use strict";
    window.addEventListener("DOMContentLoaded", () => {

        const bars = document.querySelector('.bars'),
        navItem = document.querySelector('ul ul'),
        times = document.querySelector('.fa-times');

        bars.addEventListener('click', () => {
            navItem.classList.add("active");
            console.log("sa");
        })
        times.addEventListener('click', () =>{
            navItem.classList.remove("active");
        })

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
    })

           // CARUSELL..................

           const left = document.querySelector('.fa-angle-left'),
           right = document.querySelector('.fa-angle-right'),
           carusel = document.querySelectorAll('.title');
           let l = 0;
       
               right.onclick = () =>{
               l++;
           for(var i of carusel){     
               if(l==0) {i.style.left = "0px";}
               if(l==1) {i.style.left = "-300px";}
               if(l==2) {i.style.left = "-600px";}
               if(l==3) {i.style.left = "-900px";}
               if(l==4) {i.style.left = "-1200px";}
               if(l > 4) {l = 4;}
               }
           }
            
           left.onclick = () =>{
               l--;
           for(var i of carusel){     
               if(l==0) {i.style.left = "0px";}
               if(l==1) {i.style.left = "-300px";}
               if(l==2) {i.style.left = "-600px";}
               if(l==3) {i.style.left = "-900px";}
               if(l==4) {i.style.left = "-1200px";}
               if(l < 0) {l = 0;}
               }
           }

    })
