// Header functionality for all pages
document.addEventListener('DOMContentLoaded', function() {
    // Set active page indicator
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('data-page');

        // Check if current page matches
        if ((currentPage === 'index.html' || currentPage === '') && linkPage === 'index') {
            link.classList.add('active');
        } else if (currentPage === 'services.html' && linkPage === 'services') {
            link.classList.add('active');
        } else if (currentPage === 'gallery.html' && linkPage === 'gallery') {
            link.classList.add('active');
        }
    });

    // Trigger page load fade-in animation
    const mainContent = document.querySelector('main');
    if (mainContent) {
        // Small delay to ensure smooth transition
        setTimeout(() => {
            mainContent.classList.add('loaded');
        }, 50);
    }

    // Mobile menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-navigation');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';

            // Toggle active state
            menuToggle.classList.toggle('active');
            mainNav.classList.toggle('active');

            // Update ARIA attribute
            menuToggle.setAttribute('aria-expanded', !isExpanded);
        });

        // Close menu when clicking nav links
        const navLinksInMenu = mainNav.querySelectorAll('.nav-link');
        navLinksInMenu.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Back to top button functionality
    const backToTopButton = document.querySelector('.back-to-top');

    if (backToTopButton) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        // Scroll to top when clicked
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Gallery tab functionality (only on gallery page)
    if (currentPage === 'gallery.html') {
        // Handle URL hash for direct tab linking
        const handleHash = function() {
            const hash = window.location.hash.substring(1); // Remove #
            const tabMap = {
                'couples': 'tab-couples',
                'canine': 'tab-canine',
                'equestrian': 'tab-equestrian'
            };

            if (hash && tabMap[hash]) {
                const tabInput = document.getElementById(tabMap[hash]);
                if (tabInput) {
                    tabInput.checked = true;
                }
            }
        };

        // Handle hash on page load
        handleHash();

        // Handle hash changes (back/forward button)
        window.addEventListener('hashchange', handleHash);

        // Add click handlers to tab buttons to update URL hash
        const tabButtons = document.querySelectorAll('.tab-button');
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                const forAttr = this.getAttribute('for');
                const tabName = forAttr.replace('tab-', '');
                window.location.hash = tabName;
            });

            // Add keyboard support for tab buttons
            button.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
        });
    }
});
