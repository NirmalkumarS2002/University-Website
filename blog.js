let blogEmail = document.querySelector("#blogEmail");
let subscribeBtn = document.querySelector("#subscribeBtn");
let blogError = document.querySelector(".blogerror");

subscribeBtn.addEventListener("click", () => {

    let email = blogEmail.value.trim();

    // Empty validation
    if (email === "") {
        blogError.textContent = "Please enter your email address.";
        blogError.style.color = "red";
        return;
    }

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        blogError.textContent = "Please enter a valid email address.";
        blogError.style.color = "red";
        return;
    }

    // Success
    blogError.textContent = "Successfully subscribed!";
    blogError.style.color = "green";

    blogEmail.value = "";
});