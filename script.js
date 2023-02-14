const hamburger = document.querySelector(".ham");  
const navsub = document.querySelector(".nav-sub");  
hamburger.addEventListener('click', () => {  
    navsub.classList.toggle("nav-change") 
    console.log("test")   
});  