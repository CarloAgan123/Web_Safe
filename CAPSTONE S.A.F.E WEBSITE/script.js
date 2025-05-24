document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const sections = document.querySelectorAll('.section, .features-grid .feature-item, .step, .testimonial');

const revealOnScroll = () => {
    const scrollPos = window.innerHeight * 0.85; 
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < scrollPos) {
            section.classList.add('active'); 
        }
    });
};

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();

const buttons = document.querySelectorAll('.primary-btn, .secondary-btn');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        this.classList.add('clicked');
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 300);
    });
});

function revealSteps() {
    const steps = document.querySelectorAll('.steps .step');
    
    steps.forEach((step, index) => {
        setTimeout(() => {
            step.classList.add('active');
        }, index * 500); // 
    });
}

const howItWorksSection = document.querySelector('#how-it-works');

window.addEventListener('scroll', () => {
    const sectionTop = howItWorksSection.getBoundingClientRect().top;
    const scrollPos = window.innerHeight * 0.8; 
    if (sectionTop < scrollPos) {
        revealSteps();
    }
});

const backToTopBtn = document.getElementById("back-to-top-btn");

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
};

backToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

