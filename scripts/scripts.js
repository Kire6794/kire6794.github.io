// Function to validate the contact form
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields");
        return false;
    }
    return true;
}

(function () {
    emailjs.init('XuWRRkBTHLGo644C-');
})();

// Function to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevent the form from submitting
    var valid = validateForm();
    console.log(valid);
    if (valid) {
        emailjs.send('service_dujdlzb', 'template_1rves4r', {
            form_name: document.getElementById("name").value,
            form_email: document.getElementById("email").value,
            message: document.getElementById("message").value
        })
        .then(function(response) {
            alert("Email sent successfully!"); // Success message
            document.getElementById("contact-form").reset(); // Reset the form
        }, function(error) {
            alert("Failed to send email. Please try again."); // Error message
        });
    }
}
document.getElementById("contact-form").addEventListener("submit", submitForm);

// JavaScript for opening social media links in a new tab
document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('a[href^="http"]');
    socialLinks.forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });
});
