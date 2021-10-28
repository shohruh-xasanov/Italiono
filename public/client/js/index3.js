" use strict";
window.addEventListener("DOMContentLoaded", () =>{
    
    const navbar = document.querySelector('nav ul ul'),
    bars = document.querySelector('.bars img'),
    xTimes = document.querySelector('ul ul .fa-times'),


    title = document.querySelectorAll('.title'),
    caruselLeft = document.querySelector('.fa-angle-left'),
    caruselRight = document.querySelector('.fa-angle-right'),
    productPage = Math.ceil(title.length/4);
    let l = 0;

    let movePer = 25.34;
    let maxMove = 203;

    // move viev

    let mobilViev = window.matchMedia("(max-width: 768px)");
    if (mobilViev.matches);
    {
        movePer = 50.36;
        maxMove = 504;
    };

    let right_mover = () =>{
        l = l + movePer;
        if(title == 1) {l = 0}
        for(const i of title){
            if(l > maxMove) { l = l - movePer;}
            i.style.left = '-' + l + '%';
        }
    }
    caruselRight.addEventListener('click',() =>{
        right_mover();
        console.log('afa');
    })

    let left_mover = () => {
        l = l - movePer;
        if(l <= 0) {l = 0;}
        for(const i of title){
            if(productPage > 1) {}
            i.style.left = '-' + l + '%';
        }
    }
    caruselLeft.addEventListener('click',() =>{
        left_mover();
        console.log('afa');
    })










    
    bars.addEventListener('click', () =>{
        navbar.classList.add('active');
    });
    xTimes.addEventListener('click', () =>{
        navbar.classList.remove('active');
    })


    // caruselRight.addEventListener('click',() =>{
    //     l++;
    //     for(let i of title){
    //         if(l==0) {i.style.left = '0px';}
    //         if(l==1) {i.style.left = '-380px';}
    //         if(l==2) {i.style.left = '-760px';}
    //         if(l==3) {i.style.left = '-1140px';}
    //         if(l==4) {i.style.left = '-1520px';}
    //         if(l>4) {l=4;}
    //     }
    //     console.log('hay');
    // })


    //   caruselLeft.addEventListener('click',() =>{
    //     l--;
    //     for(let i of title){
    //         if(l==0) {i.style.left = '0px';}
    //         if(l==1) {i.style.left = '-380px';}
    //         if(l==2) {i.style.left = '-760px';}
    //         if(l==3) {i.style.left = '-1140px';}
    //         if(l<0) {l=0;}
    //     }
    //     console.log('hay');
    // })

})