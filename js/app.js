let menubtn = document.querySelector(".fa.fa-bars");
let menus = document.querySelector(".menu");
let nav = document.querySelector("nav");
let crossbtn = document.querySelector(".fa.fa-x");



function menubutton () {
    
    nav.classList.toggle("active");
    if(nav.classList.contains("active")){
        crossbtn.style = `opacity: 1; visibility: visible; transform: rotate(360deg);`
        menubtn.style = `opacity: 0; visibility: hidden;  transform: rotate(360deg); `
        
    } else {
        crossbtn.style = `opacity: 0; visibility: hidden; transform: rotate(0deg);`
        menubtn.style = `opacity: 1; visibility: visible; transform: rotate(0deg);`

    }



}

menubtn.addEventListener( "click" , menubutton);
crossbtn.addEventListener("click", menubutton);
