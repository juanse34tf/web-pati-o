// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic'
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form handling and validation (skip if Pageclip is managing the form)
const contactFormEl = document.getElementById('contactForm');
if (contactFormEl && !contactFormEl.classList.contains('pageclip-form')) {
    contactFormEl.addEventListener('submit', function(e) {
        e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const formInputs = this.querySelectorAll('input, select, textarea');
    
    // Simple validation
    let isValid = true;
    formInputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            isValid = false;
            input.classList.add('border-red-500');
            input.addEventListener('input', function() {
                this.classList.remove('border-red-500');
            });
        }
    });
    
    if (!isValid) {
        showNotification('Por favor, completa todos los campos requeridos', 'error');
        return;
    }
    
    // Simulate form submission
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Enviando...';
    submitButton.disabled = true;
    
    setTimeout(() => {
        // Reset form
        this.reset();
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
        
        // Show success message
        showNotification('¡Mensaje enviado correctamente! Te contactaré pronto.', 'success');
        
        // Create WhatsApp message
        const name = formInputs[0].value;
        const phone = formInputs[1].value;
        const email = formInputs[2].value;
        const subject = formInputs[3].value;
        const message = formInputs[4].value;
        
        const whatsappMessage = `Hola profesor Carlos! 
        
📚 Solicitud de asesoría académica

👤 Nombre: ${name}
📞 Teléfono: ${phone}
📧 Email: ${email}
📖 Materia: ${subject}

💬 Mensaje: ${message}

Espero tu respuesta. ¡Gracias!`;
        
        const whatsappURL = `https://wa.me/573104426189?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Redirect to WhatsApp after a delay
        setTimeout(() => {
            window.open(whatsappURL, '_blank');
        }, 2000);
        
    }, 1500);
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm transition-all duration-300 transform translate-x-full`;
    
    if (type === 'success') {
        notification.className += ' bg-green-500 text-white';
        notification.innerHTML = `<i class="fas fa-check-circle mr-2"></i>${message}`;
    } else if (type === 'error') {
        notification.className += ' bg-red-500 text-white';
        notification.innerHTML = `<i class="fas fa-exclamation-circle mr-2"></i>${message}`;
    } else {
        notification.className += ' bg-blue-500 text-white';
        notification.innerHTML = `<i class="fas fa-info-circle mr-2"></i>${message}`;
    }
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Hide notification
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// WhatsApp floating button animation
const whatsappButton = document.getElementById('whatsappButton');
if (whatsappButton) {
    // Pulse animation
    setInterval(() => {
        whatsappButton.classList.add('animate-pulse');
        setTimeout(() => {
            whatsappButton.classList.remove('animate-pulse');
        }, 1000);
    }, 5000);
    
    // Add click tracking
    whatsappButton.addEventListener('click', function() {
        // Track WhatsApp button click (for analytics)
        console.log('WhatsApp button clicked');
    });
}

// Scroll-based effects
let lastScrollTop = 0;
const scrollThreshold = 100;

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Show/hide WhatsApp button based on scroll
    if (whatsappButton) {
        if (scrollTop > 300) {
            whatsappButton.classList.remove('scale-0');
            whatsappButton.classList.add('scale-100');
        } else {
            whatsappButton.classList.remove('scale-100');
            whatsappButton.classList.add('scale-0');
        }
    }
    
    // Add parallax effect to hero section
    const heroSection = document.querySelector('section');
    if (heroSection && scrollTop < window.innerHeight) {
        const parallaxElements = heroSection.querySelectorAll('.absolute');
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrollTop * speed}px)`;
        });
    }
    
    lastScrollTop = scrollTop;
});

// Add loading animation
window.addEventListener('load', function() {
    // Remove any loading screens if they exist
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.remove();
        }, 500);
    }
    
    // Trigger entrance animations
    document.body.classList.add('loaded');
});

// Subject cards hover effect
document.querySelectorAll('[data-aos="fade-up"]').forEach(card => {
    if (card.querySelector('i')) { // Only for subject cards
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(10deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    }
});

// Testimonials auto-scroll (optional feature)
function initTestimonialsCarousel() {
    const testimonials = document.querySelectorAll('#testimonios .grid > div');
    let currentTestimonial = 0;
    
    if (testimonials.length > 3) {
        setInterval(() => {
            testimonials[currentTestimonial].style.opacity = '0.5';
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            testimonials[currentTestimonial].style.opacity = '1';
        }, 4000);
    }
}

// Initialize testimonials carousel on mobile
if (window.innerWidth < 768) {
    initTestimonialsCarousel();
}

// Pricing cards interaction
document.querySelectorAll('#precios .grid > div').forEach(card => {
    card.addEventListener('mouseenter', function() {
        if (!this.classList.contains('scale-105')) {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        if (!this.classList.contains('scale-105')) {
            this.style.transform = 'scale(1)';
        }
    });
});

// Contact form enhancements
const contactInputs = document.querySelectorAll('#contactForm input, #contactForm select, #contactForm textarea');

contactInputs.forEach(input => {
    // Add focus effects
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
        this.classList.add('ring-2', 'ring-primary');
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
        this.classList.remove('ring-2', 'ring-primary');
        
        // Validate on blur
        if (this.hasAttribute('required') && !this.value.trim()) {
            this.classList.add('border-red-300');
        } else {
            this.classList.remove('border-red-300');
        }
    });
    
    // Real-time validation
    input.addEventListener('input', function() {
        if (this.classList.contains('border-red-300')) {
            this.classList.remove('border-red-300');
        }
        
        // Email validation
        if (this.type === 'email' && this.value) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(this.value)) {
                this.classList.add('border-yellow-300');
            } else {
                this.classList.remove('border-yellow-300');
                this.classList.add('border-green-300');
            }
        }
        
        // Phone validation
        if (this.type === 'tel' && this.value) {
            const phonePattern = /^[0-9\s\+\-\(\)]+$/;
            if (!phonePattern.test(this.value)) {
                this.classList.add('border-yellow-300');
            } else {
                this.classList.remove('border-yellow-300');
                this.classList.add('border-green-300');
            }
        }
    });
});

// Add typing effect to hero text (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function typing() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

// Initialize typing effect on load
setTimeout(() => {
    const heroSubtitle = document.querySelector('section p.text-xl');
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        typeWriter(heroSubtitle, originalText, 50);
    }
}, 1000);

// Statistics counter animation (if you want to add statistics later)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    updateCounter();
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
        }
    });
}, observerOptions);

// Observe all sections for animations
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Add custom CSS animations
const customStyles = `
<style>
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fadeInUp {
    animation: fadeInUp 0.6s ease-out forwards;
}

.focused label {
    color: #1e40af;
    font-weight: 600;
}

.loaded {
    opacity: 1;
}

/* Custom scrollbar */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
    background: #3b82f6;
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: #1e40af;
}

/* Smooth transitions for all interactive elements */
* {
    transition: all 0.3s ease;
}

/* Improved button hover effects */
button:hover, .btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

/* Card hover effects */
.hover\\:shadow-2xl:hover {
    transform: translateY(-5px);
}

/* WhatsApp button pulse animation */
@keyframes pulse-green {
    0% {
        box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
    }
    70% {
        box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
    }
}

#whatsappButton {
    animation: pulse-green 2s infinite;
}

/* Loading state for forms */
.loading {
    opacity: 0.7;
    pointer-events: none;
}

/* Responsive text sizing */
@media (max-width: 640px) {
    h1 {
        font-size: 2.5rem !important;
    }
    
    h2 {
        font-size: 2rem !important;
    }
    
    .text-xl {
        font-size: 1.125rem !important;
    }
}
</style>`;

// Inject custom styles
document.head.insertAdjacentHTML('beforeend', customStyles);

// Performance optimization: Lazy loading for images
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// Error handling for form submission
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
    showNotification('Ha ocurrido un error. Por favor, intenta nuevamente.', 'error');
});

// Console welcome message
console.log(`
🎓 Profesor Carlos G. Patiño - Landing Page
📱 WhatsApp: 310 442 61 89
📧 Email: profecarlos757@gmail.com

Desarrollado con ❤️ para transformar la educación
`);