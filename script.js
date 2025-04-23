// Add scroll event listener to change header appearance on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition < window.innerHeight) {
        hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    }

    // Reveal elements on scroll
    revealOnScroll();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Add click event to scroll down button
document.querySelector('.scroll-down').addEventListener('click', function() {
    const heroHeight = document.querySelector('.hero').offsetHeight;
    
    window.scrollTo({
        top: heroHeight,
        behavior: 'smooth'
    });
});

// Function to reveal elements when scrolled into view
function revealOnScroll() {
    const sections = document.querySelectorAll('.menu-highlights, .sustainability, .location');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.8;
        
        if (sectionTop < triggerPoint) {
            section.classList.add('revealed');
            
            // Add animation to menu cards if they're in view
            if (section.classList.contains('menu-highlights')) {
                const cards = section.querySelectorAll('.menu-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 200);
                });
            }
            
            // Add animation to sustainability content
            if (section.classList.contains('sustainability')) {
                const content = section.querySelector('.sustainability-content');
                content.style.opacity = '1';
                content.style.transform = 'translateY(0)';
            }
            
            // Add animation to location content
            if (section.classList.contains('location')) {
                const content = section.querySelector('.location-content');
                content.style.opacity = '1';
                content.style.transform = 'translateY(0)';
            }
        }
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Trigger reveal on initial load
    setTimeout(revealOnScroll, 500);
});