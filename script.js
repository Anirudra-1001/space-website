// Smooth Scrolling
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0,0,0,0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'rgba(0,0,0,0.8)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
});

// Animate Numbers
function animateNumbers() {
    const numbers = document.querySelectorAll('.number');
    numbers.forEach(number => {
        const target = parseInt(number.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                number.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                number.textContent = Math.floor(current).toLocaleString();
            }
        }, 30);
    });
}

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.8s ease';
    observer.observe(section);
});

// Counter Animation Trigger
const statsSection = document.getElementById('galaxy');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateNumbers();
            statsObserver.unobserve(entry.target);
        }
    });
});
statsObserver.observe(statsSection);

// Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Form Submit
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('🚀 Message sent to Space Command! Thanks! 🌌');
    e.target.reset();
});

// Fact Cards Hover Sound Effect (Visual only)
document.querySelectorAll('.fact-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px) scale(1.02)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Parallax Effect for Stars
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    document.querySelector('.stars').style.transform = `translateY(${scrolled * 0.5}px)`;
    document.querySelector('.stars2').style.transform = `translateY(${scrolled * 0.25}px)`;
    document.querySelector('.stars3').style.transform = `translateY(${scrolled * 0.75}px)`;
});
