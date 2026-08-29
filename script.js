// navbar
let sidebar = document.querySelector(".sidebar")
let menubtn = document.querySelector(".menubtn")
let closebtn = document.querySelector(".closebtn")


menubtn.addEventListener("click", () => {
    sidebar.classList.add("active")
})

closebtn.addEventListener("click", () => {
    sidebar.classList.remove("active")
})

// navbar scroller

let navbar=document.querySelector(".navbar")
window.addEventListener("scroll",()=>{

    if(window.scrollY>400){
        navbar.classList.add("active")
    }

    else{
        navbar.classList.remove("active")
    }

})

// errorpage

let errorpage=document.querySelectorAll(".errorpage")
errorpage.forEach((err)=>{
    err.addEventListener("click",()=>{
         window.location.href="404.html"
    })
})