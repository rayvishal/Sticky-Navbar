const navbarE=document.querySelector(".navbar")
const bottomcontainer=document.querySelector(".bottomcontainer")
window.addEventListener("scroll",()=>{
    if(window.scrollY>bottomcontainer.offsetTop-50){
        navbarE.classList.add("active")
    }else{
        navbarE.classList.remove("active")
    }

});