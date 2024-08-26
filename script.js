let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('.navbar a');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
};
// Close the menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbar.classList.contains('active')) {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        }
    });
});
// New form submission handling
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const responseMessage = document.getElementById('response-message');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission

            const formData = new FormData(form);

            fetch(form.action, {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    responseMessage.innerHTML = 'Form submitted successfully!!';
                    responseMessage.style.color = 'green';
                    responseMessage.style.fontFamily = 'Poppins, sans-serif';
                    responseMessage.style.fontSize = '1.4rem';
                    responseMessage.style.fontWeight = 'bold';
                    responseMessage.style.textAlign = 'center';
                    responseMessage.style.margin = '10px 0';
                } else {
                    responseMessage.innerHTML = 'There was an error submitting the form. Please try again.';
                    responseMessage.style.color = 'red';
                }
                responseMessage.style.display = 'block';
            })
            .catch(error => {
                responseMessage.innerHTML = 'There was an error submitting the form. Please try again.';
                responseMessage.style.color = 'red';
                responseMessage.style.display = 'block';
            });
        });
    }
});
///Animations JS Code
// Function to check if an element is in view
function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
// Function to add 'animate' class if in view
function animateOnScroll() {
    const elements = document.querySelectorAll('.home-content h1, .home-content h3, .contact-box, .home-content p, .about-content h2, .about-content p, .about-content h3, .about-content ul');
    elements.forEach(element => {
        if (isInView(element)) {
            element.classList.add('animate');
        }
    });
}
// Add scroll event listener
window.addEventListener('scroll', animateOnScroll);
// Trigger animation on page load (for sections already in view)
document.addEventListener('DOMContentLoaded', animateOnScroll);
// Smooth scroll behavior for navbar links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});
