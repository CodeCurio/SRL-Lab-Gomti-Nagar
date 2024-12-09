document.addEventListener('DOMContentLoaded', function() {
    // Fullscreen Navbar
    const hamburger = document.querySelector('.hamburger');
    const fullscreenNav = document.createElement('div');
    fullscreenNav.classList.add('fullscreen-nav');
    
    // Create fullscreen nav content
    fullscreenNav.innerHTML = `
        <button class="close-nav">&times;</button>
        <nav class="fullscreen-nav-content">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#packages">Health Packages</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div class="fullscreen-nav-contact">
                <p><i class="fas fa-phone"></i> +91 123 456 7890</p>
                <p><i class="fas fa-envelope"></i> info@srldiagnostics.com</p>
                <div class="fullscreen-social-icons">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </nav>
    `;
    
    // Append to body
    document.body.appendChild(fullscreenNav);

    // Hamburger click event
    hamburger.addEventListener('click', () => {
        fullscreenNav.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Close nav button
    const closeNav = fullscreenNav.querySelector('.close-nav');
    closeNav.addEventListener('click', () => {
        fullscreenNav.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Close nav when a link is clicked
    const navLinks = fullscreenNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            fullscreenNav.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Image Slider
    const slides = document.querySelector('.slides');
    const slideItems = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dotsContainer = document.querySelector('.dots');
    
    let currentSlide = 0;
    const totalSlides = slideItems.length;

    // Create dots
    slideItems.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    // Update dots
    function updateDots() {
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    // Go to specific slide
    function goToSlide(index) {
        currentSlide = index;
        slides.style.transform = `translateX(-${currentSlide * 33.33}%)`;
        updateDots();
    }

    // Next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        goToSlide(currentSlide);
    }

    // Previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        goToSlide(currentSlide);
    }

    // Event listeners for buttons
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Auto slide
    setInterval(nextSlide, 5000);
});
