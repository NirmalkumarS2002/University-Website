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


//footer form

let footEmail = document.querySelector("#foot-email");
let subBtn = document.querySelector("#sub-btn");
let footError = document.querySelector(".foot-error");

subBtn.addEventListener("click", (e) => {

    e.preventDefault();

    let email = footEmail.value.trim();

    // Clear previous message
    footError.textContent = "";

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Empty validation
    if (email === "") {
        footError.textContent = "Please enter your email.";
        footError.style.color = "red";
        return;
    }

    // Email validation
    if (!emailPattern.test(email)) {
        footError.textContent = "Please enter a valid email.";
        footError.style.color = "red";
        return;
    }

    // Success
    footError.textContent = "Subscribed successfully!";
    footError.style.color = "green";

    // Reset input
    footEmail.value = "";

    // Hide message after 3 seconds
    setTimeout(() => {
        footError.textContent = "";
    }, 3000);

});



// reveal animation 

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("showed");
        }
    })
}, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
})

document.querySelectorAll(".reveal, .reveal-right, .reveal-left").forEach((el) => {
    observer.observe(el)
})