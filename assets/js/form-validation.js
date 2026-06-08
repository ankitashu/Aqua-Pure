document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("enquiryForm");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let service = document.getElementById("service").value;
        let address = document.getElementById("address").value.trim();
        let agree = document.getElementById("agree").checked;

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name === "") {
            alert("Please enter your name");
            return;
        }

        if (name.length < 3) {
            alert("Name must be at least 3 characters");
            return;
        }

        if (email === "") {
            alert("Please enter your email");
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address");
            return;
        }

        if (service === "") {
            alert("Please select a service");
            return;
        }

        if (address === "") {
            alert("Please enter your address");
            return;
        }

        if (!agree) {
            alert("Please accept the checkbox");
            return;
        }

        alert("Form submitted successfully!");

        form.reset();

    });

});

// Dealer Form Validation

const dealerForm = document.getElementById("dealerForm");

if(dealerForm){

    dealerForm.addEventListener("submit", function(e){

        e.preventDefault();

        let zip = document.getElementById("zipCode").value.trim();

        if(zip === ""){
            alert("Please enter your ZIP / PIN Code");
            return;
        }

        if(!/^[0-9]{6}$/.test(zip)){
            alert("Please enter a valid 6 digit PIN Code");
            return;
        }

        alert("Dealer search request submitted successfully!");

        dealerForm.reset();

    });

}

// Contact Form Validation

const contactForm = document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        let fullName = document.getElementById("fullName").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let message = document.getElementById("message").value.trim();

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let phonePattern = /^[0-9]{10}$/;

        if(fullName === ""){
            alert("Please enter your full name");
            return;
        }

        if(fullName.length < 3){
            alert("Name must be at least 3 characters");
            return;
        }

        if(email === ""){
            alert("Please enter email address");
            return;
        }

        if(!emailPattern.test(email)){
            alert("Please enter a valid email address");
            return;
        }

        if(phone === ""){
            alert("Please enter phone number");
            return;
        }

        if(!phonePattern.test(phone)){
            alert("Please enter a valid 10 digit mobile number");
            return;
        }

        if(message === ""){
            alert("Please enter your message");
            return;
        }

        if(message.length < 10){
            alert("Message should be at least 10 characters");
            return;
        }

        alert("Message sent successfully!");

        contactForm.reset();

    });

}