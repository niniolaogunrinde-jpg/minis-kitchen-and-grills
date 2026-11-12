
// Get the contact form
const contactForm = document.getElementById("contact-form");

// Create a message area
const feedbackMessage = document.createElement("p");
feedbackMessage.id = "form-feedback";
feedbackMessage.setAttribute("role", "status");

// Display the message area below the form
contactForm.insertAdjacentElement("afterend", feedbackMessage);

// Listen for form submission
contactForm.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Get the user's information
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate the form
    if (name === "" || email === "" || subject === "" || message === "") {
        feedbackMessage.textContent = "Please fill in all fields.";
        feedbackMessage.style.color = "red";
    } else {
        feedbackMessage.textContent = "Thank you, " + name + "! Your message has been received.";
        feedbackMessage.style.color = "green";

        // Clear the form
        contactForm.reset();
    }
});
// Back to Top button
const backToTopButton = document.getElementById("back-to-top");

backToTopButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});