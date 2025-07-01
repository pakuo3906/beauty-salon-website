// GSAP Animation Script for Natural Crown Beauty Salon

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeInteractions();
    initializeMobileMenu();
    initializeScrollEffects();
});

// Main animation initialization
function initializeAnimations() {
    // Hero section entrance animation
    const heroTl = gsap.timeline();
    
    heroTl
        .to('.hero-content', {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out'
        })
        .from('.hero-title', {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'back.out(1.7)'
        }, '-=0.8')
        .from('.hero-subtitle', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power2.out'
        }, '-=0.6')
        .from('.hero-description', {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: 'power2.out'
        }, '-=0.4')
        .from('.hero-buttons .cta-button, .hero-buttons .cta-button-outline', {
            opacity: 0,
            y: 20,
            duration: 0.5,
            stagger: 0.2,
            ease: 'power2.out'
        }, '-=0.3');

    // Kinetic typography animation
    gsap.to('.kinetic-text', {
        backgroundPosition: '200% center',
        duration: 3,
        ease: 'none',
        repeat: -1
    });

    // Floating elements animation
    gsap.set('.floating-circle', {
        y: 0,
        rotation: 0
    });

    gsap.to('.floating-circle', {
        y: -30,
        rotation: 360,
        duration: 6,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: {
            each: 1.5,
            from: 'random'
        }
    });
}

// Section animations triggered by scroll
function initializeScrollEffects() {
    // Section titles animation
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Service cards stagger animation
    gsap.from('.service-card', {
        opacity: 0,
        y: 80,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#services',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        }
    });

    // Review cards animation
    gsap.from('.review-card', {
        opacity: 0,
        x: -100,
        duration: 0.8,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#reviews',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        }
    });

    // About section image animation
    gsap.from('.about-image', {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#about',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        }
    });

    gsap.from('.about-content', {
        opacity: 0,
        x: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#about',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        }
    });

    // Access section animation
    gsap.from('.access-info', {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#access',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        }
    });

    gsap.from('.map-area', {
        opacity: 0,
        x: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#access',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        }
    });
}

// Interactive elements and micro-interactions
function initializeInteractions() {
    // Service card hover effects
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.05,
                rotation: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // CTA button hover effects
    document.querySelectorAll('.cta-button, .cta-button-outline').forEach(button => {
        button.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.05,
                duration: 0.3,
                ease: 'back.out(1.7)'
            });
        });

        button.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Review card hover effects
    document.querySelectorAll('.review-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, {
                y: -10,
                scale: 1.02,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Floating CTA button pulse animation
    gsap.to('.floating-cta', {
        scale: 1.1,
        duration: 1,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true
    });

    // Navigation link hover effects
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('mouseenter', function() {
            gsap.to(this, {
                y: -2,
                duration: 0.2,
                ease: 'power2.out'
            });
        });

        link.addEventListener('mouseleave', function() {
            gsap.to(this, {
                y: 0,
                duration: 0.2,
                ease: 'power2.out'
            });
        });
    });
}

// Mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    let isMenuOpen = false;

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            if (!isMenuOpen) {
                // Open menu
                mobileMenu.classList.remove('hidden');
                gsap.from(mobileMenu, {
                    opacity: 0,
                    y: -20,
                    duration: 0.3,
                    ease: 'power2.out'
                });
                gsap.from('.mobile-nav-link', {
                    opacity: 0,
                    x: -20,
                    duration: 0.3,
                    stagger: 0.1,
                    ease: 'power2.out'
                });
                isMenuOpen = true;
            } else {
                // Close menu
                gsap.to(mobileMenu, {
                    opacity: 0,
                    y: -20,
                    duration: 0.3,
                    ease: 'power2.in',
                    onComplete: function() {
                        mobileMenu.classList.add('hidden');
                    }
                });
                isMenuOpen = false;
            }
        });

        // Close menu when clicking on links
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', function() {
                gsap.to(mobileMenu, {
                    opacity: 0,
                    y: -20,
                    duration: 0.3,
                    ease: 'power2.in',
                    onComplete: function() {
                        mobileMenu.classList.add('hidden');
                    }
                });
                isMenuOpen = false;
            });
        });
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const targetY = targetElement.offsetTop - 80;
            gsap.to(window, {
                duration: 0.2,
                scrollTo: targetY,
                ease: 'none',
                overwrite: true
            });
        }
    });
});

// Parallax effects for hero background
gsap.to('.hero-bg', {
    yPercent: -50,
    ease: 'none',
    scrollTrigger: {
        trigger: '#home',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
    }
});

// Text reveal animation for long text content
function initializeTextReveal() {
    gsap.utils.toArray('.reveal-text').forEach(text => {
        gsap.from(text, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: text,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });
}

// Initialize text reveal
initializeTextReveal();

// Mouse cursor effect (optional)
function initializeCursorEffect() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: linear-gradient(45deg, #F8BBD9, #E4C1F9);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: difference;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX - 10,
            y: e.clientY - 10,
            duration: 0.1,
            ease: 'power2.out'
        });
        cursor.style.opacity = '1';
    });

    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });
}

// Initialize cursor effect for desktop only
if (window.innerWidth > 768) {
    initializeCursorEffect();
}

// Loading animation
function initializeLoadingAnimation() {
    gsap.set('body', { overflow: 'hidden' });
    
    const loadingTl = gsap.timeline({
        onComplete: function() {
            gsap.set('body', { overflow: 'auto' });
        }
    });

    loadingTl
        .to('.hero-content', {
            opacity: 1,
            duration: 0.5
        })
        .to('body', {
            overflow: 'auto',
            duration: 0.1
        });
}

// Performance optimization: Reduce animations on slower devices
function optimizePerformance() {
    const isSlowDevice = navigator.hardwareConcurrency < 4 || 
                        navigator.connection?.effectiveType === 'slow-2g' ||
                        navigator.connection?.effectiveType === '2g';
    
    if (isSlowDevice) {
        gsap.globalTimeline.timeScale(0.5);
    }
}

optimizePerformance();

// Accessibility: Respect user's motion preferences
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.globalTimeline.timeScale(0.1);
    gsap.set('*', { animation: 'none' });
}

// Window resize handler
window.addEventListener('resize', function() {
    ScrollTrigger.refresh();
});

// Contact form enhancement (if form exists)
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Add submission animation
        gsap.to(this, {
            scale: 0.95,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            ease: 'power2.inOut'
        });
        
        // Handle form submission here
        console.log('Form submitted');
    });
}