let menu = document.querySelector(".menu");
let button =document.querySelector(".fa-bars");
let close = document.querySelector(".close")
button.addEventListener("click" , ()=> {
    menu.classList.add("active")
})
close.addEventListener("click" , ()=> {
    menu.classList.remove("active")
})