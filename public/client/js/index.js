  
    // const modal = document.querySelector('.modal_ca '),
    // share = document.querySelectorAll('.showme');

    // share.onclick = () =>{
    //     modal.forEach((item, i) => {
    //     item[i].style.display = 'block';
    //     console.log('hay');
    //     });
    //  }
  
  
  //  CARUSELL..................

            const left = document.querySelector('.right'),
            right = document.querySelector('.left'),
            boxCarusel = document.querySelectorAll('.box_img_carusel');
            let n = 0;
        
                right.onclick = () =>{
                l++;
          
            for(var i of boxCarusel){     
                if(n==0) {i.style.left = "0px";}
                if(n==1) {i.style.left = "-140px";}
                if(n==2) {i.style.left = "-280px";}
                if(n==3) {i.style.left = "-420px";}
                if(n==4) {i.style.left = "-560px";}
                if(n > 4) {n = 4;}
                }
            }
             
            left.onclick = () =>{
                n--;
            for(var i of boxCarusel){     
                if(n==0) {i.style.left = "0px";}
                if(n==1) {i.style.left = "-140px";}
                if(n==2) {i.style.left = "-280px";}
                if(n==3) {i.style.left = "-420px";}
                if(n==4) {i.style.left = "-560px";}
                if(n < 0) {n = 0;}
                }
            }

               //    TABSS........
     
         const tabs = document.querySelectorAll('.box_img_carusel'),
         tabHeader = document.querySelectorAll('.tabheader'),
         headerContent = document.querySelector('.carusel_box2');
     
         function hideTabContent() {
             tabHeader.forEach(item => {
                 item.style.display = 'none';
             });
             tabs.forEach(item => {
                 item.classList.remove('tab_header_active');
             })
         }
     
         function showTabcontent(i = 0) {
             tabHeader[i].style.display = 'block';
             tabs[i].classList.add('tab_header_active');
         }
         hideTabContent();
         showTabcontent();
     
     
     
         headerContent.addEventListener('click',(event) =>{
     
             if(event.target && event.target.classList.contains(".box_img_carusel")) {
                 tabs.forEach((item, i) => {
                     if(event.target == item ){
                         hideTabContent();
                         showTabcontent(i);
                     }
                 })
             }
         })