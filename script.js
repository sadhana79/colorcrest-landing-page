document.addEventListener('DOMContentLoaded', function() {

    
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            });
        });
    }

    
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-slider .slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        if (slides.length === 0) return; 
        slides.forEach((slide, i) => {
            slide.classList.remove('active-slide');
            if (i === index) {
                slide.classList.add('active-slide');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

   
    if (slides.length > 0) {
        showSlide(currentSlide);
        
        setInterval(nextSlide, 5000);
    }

   
    const productScroller = document.querySelector('.product-scroller');
    const scrollLeftBtn = document.querySelector('.scroll-button.scroll-left');
    const scrollRightBtn = document.querySelector('.scroll-button.scroll-right');

    if (productScroller && scrollLeftBtn && scrollRightBtn) {
        const scrollAmount = 420; 

        scrollRightBtn.addEventListener('click', () => {
            productScroller.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });

        scrollLeftBtn.addEventListener('click', () => {
            productScroller.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        let autoScrollInterval;
        const autoScrollSpeed = 3000; 
        const scrollStep = 380 + 30; 

        const startAutoScroll = () => {
            autoScrollInterval = setInterval(() => {
              
                if (productScroller.scrollLeft + productScroller.clientWidth >= productScroller.scrollWidth - 10) {
                    
                    productScroller.scrollTo({ left: 0, behavior: 'auto' }); 
                } else {
                    productScroller.scrollBy({
                        left: scrollStep,
                        behavior: 'smooth'
                    });
                }
            }, autoScrollSpeed);
        };

        const stopAutoScroll = () => {
            clearInterval(autoScrollInterval);
        };

        startAutoScroll();

      
        productScroller.addEventListener('mouseenter', stopAutoScroll);
        productScroller.addEventListener('mouseleave', startAutoScroll);
        scrollLeftBtn.addEventListener('mouseenter', stopAutoScroll);
        scrollLeftBtn.addEventListener('mouseleave', startAutoScroll);
        scrollRightBtn.addEventListener('mouseenter', stopAutoScroll);
        scrollRightBtn.addEventListener('mouseleave', startAutoScroll);
    }


    
    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.2 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
               
                entry.target.classList.add('active');
            } else {
                
                entry.target.classList.remove('active');
            }
        });
    }, observerOptions);

   
    document.querySelectorAll('.fade-in-on-scroll, .slide-in-left-on-scroll, .slide-in-right-on-scroll').forEach(el => {
        observer.observe(el);
    });



    const contactForm = document.getElementById('contactForm');
    const clearButton = document.getElementById('clearFormBtn');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            
            event.preventDefault();

           
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

        
            if (!nameInput || !emailInput || !messageInput ||
                nameInput.value.trim() === '' ||
                emailInput.value.trim() === '' ||
                messageInput.value.trim() === '') {
                alert('Please fill in all required fields before sending!');
                return; 
            }

            
            alert('Thank you for your message! We will get back to you soon.');

           
            contactForm.reset();

          
        });
    }


    if (clearButton) {
        clearButton.addEventListener('click', function() {
            const form = this.closest('form');
            if (form) {
                form.reset(); 
            }
        });
    }

}); 