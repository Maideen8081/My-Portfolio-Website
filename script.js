// Mobile menu toggle functionality
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.querySelector('.nav-links');

mobileToggle.addEventListener('click', function() {
    // Toggle mobile menu visibility
    navLinks.classList.toggle('active');
    // Toggle hamburger icon animation
    this.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        mobileToggle.classList.remove('active');
    });
});

// Close mobile menu when scrolling
window.addEventListener('scroll', function() {
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        mobileToggle.classList.remove('active');
    }
});