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
           
        });

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


});
