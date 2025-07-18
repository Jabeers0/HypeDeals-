document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Close mobile menu if open
            const navLinks = document.querySelector('.nav-links');
            const burger = document.querySelector('.burger');
            if (navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
                burger.classList.remove('toggle');
                // Remove inline style that was added for animation
                navLinks.querySelectorAll('li').forEach(link => {
                    link.style.animation = '';
                });
            }

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile Navigation (Hamburger Menu)
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Back to Top Button functionality
    const backToTopBtn = document.getElementById('backToTopBtn');

    window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            backToTopBtn.style.display = "flex"; // Use flex to center icon
        } else {
            backToTopBtn.style.display = "none";
        }
    }

    backToTopBtn.addEventListener('click', () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });

    // Optional: Fade in sections on scroll (more advanced, requires Intersection Observer API)
    // For simplicity, we'll omit this in the direct code, but it's a good next step.
    // Example: const sections = document.querySelectorAll('section');
    // const observerOptions = { threshold: 0.1 };
    // const sectionObserver = new IntersectionObserver((entries, observer) => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             entry.target.classList.add('fade-in');
    //             observer.unobserve(entry.target);
    //         }
    //     });
    // }, observerOptions);
    // sections.forEach(section => {
    //     section.classList.add('hidden-initial'); // Add a class for initial hidden state in CSS
    //     sectionObserver.observe(section);
    // });
});
