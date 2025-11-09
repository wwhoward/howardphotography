// Load header on all pages
document.addEventListener('DOMContentLoaded', function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            // Insert header at the beginning of body
            document.body.insertAdjacentHTML('afterbegin', data);

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
                }
            });
        })
        .catch(error => console.error('Error loading header:', error));
});
