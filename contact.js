let contactForm = document.querySelector(".cnt-form");

let conname = document.querySelector("#conname");
let conemail = document.querySelector("#conemail");
let conphone = document.querySelector("#conphone");
let consubject = document.querySelector("#consubject");
let conmessage = document.querySelector("#conmessage");

contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    let name = conname.value.trim();
    let email = conemail.value.trim();
    let phone = conphone.value.trim();
    let subject = consubject.value.trim();
    let message = conmessage.value.trim();

    let errors = document.querySelectorAll(".contact-error");

    // Clear previous errors
    errors.forEach((error) => {
        error.textContent = "";
    });

    let isValid = true;


    // Name validation
    let namePattern = /^[A-Za-z ]+$/;

    if (name === "") {
        conname.nextElementSibling.textContent =
            "Please enter your name.";
        isValid = false;

    } else if (!namePattern.test(name)) {
        conname.nextElementSibling.textContent =
            "Name should contain letters only.";
        isValid = false;
    }


    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        conemail.nextElementSibling.textContent =
            "Please enter your email.";
        isValid = false;

    } else if (!emailPattern.test(email)) {
        conemail.nextElementSibling.textContent =
            "Please enter a valid email.";
        isValid = false;
    }


    // Phone validation
    let phonePattern = /^[0-9]{10}$/;

    if (phone === "") {
        conphone.nextElementSibling.textContent =
            "Please enter your phone number.";
        isValid = false;

    } else if (!phonePattern.test(phone)) {
        conphone.nextElementSibling.textContent =
            "Phone number must contain 10 digits.";
        isValid = false;
    }


    // Subject validation
    if (subject === "") {
        consubject.nextElementSibling.textContent =
            "Please enter a subject.";
        isValid = false;
    }


    // Message validation
    if (message === "") {
        conmessage.nextElementSibling.textContent =
            "Please enter your message.";
        isValid = false;

    } else if (message.length < 10) {
        conmessage.nextElementSibling.textContent =
            "Message must contain at least 10 characters.";
        isValid = false;
    }


    // Final result
    if (isValid) {

        let submitMsg = contactForm.querySelector("button + .contact-error");

        submitMsg.textContent = "Message sent successfully!";
        submitMsg.style.color = "green";

        // Form reset
        contactForm.reset();

        // Message hide after 3 seconds
        setTimeout(() => {
            submitMsg.textContent = "";
        }, 3000);
    }

});