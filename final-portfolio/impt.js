// ============ Toggle Icon Navbar =============

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// ============ Scroll Section Active Link =============

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // ================= Sticky Navbar ===================
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // ================= Remove Toggle Icon and Navbar ==============
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// ================= Scroll Reveal ==============

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });
// it's CHANGE FOR SKILLS REVEAL TOP TO UI FRONT OF THE  FACE
ScrollReveal().reveal('.services , .container', { origin: 'bottom' });
// ENS

// ================= Typed JS ==============

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'UI/UX Designer', 'Web Designer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

// SKILLS SECTION DESIGN


const progText = document.querySelectorAll(".progText");
const progress = document.querySelectorAll(".progress");
const progContainer = document.querySelector(".container");
let bol = false;

window.addEventListener("scroll", function () {

    if (pageYOffset > progContainer.offsetTop - 600 && bol === false) {

        for (let i = 0; i < progText.length; i++) {

            progText[i].innerText = 0;
            let count = 0;
            progress[i].style.transition = "left 1.5s ease-in-out";
            progress[i].style.left = "100%";

            function updateCount() {
                let target = parseInt(progText[i].dataset.count);

                if (count < target) {
                    count++;
                    progText[i].innerText = count + "%";
                    setTimeout(updateCount, 5);  // Faster update interval
                } else {
                    progText[i].innerText = target + "%";
                    progress[i].style.left = (100 - target) + "%";
                }
            }

            updateCount();
            bol = true;
        }
    }
});

// end

//  for the contact emailjs mpdify
// EmailJS Initialization
(function () {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key
})();

// Add an event listener to the form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Send form data using EmailJS
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Your message has been sent successfully!');
        }, function (error) {
            console.log('FAILED...', error);
            alert('Oops! Something went wrong. Please try again.');
        });
});
