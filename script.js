function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                if (!stat.classList.contains('stat-text')) {
                    const target = parseInt(stat.getAttribute('data-target'));
                    animateCounter(stat, target);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }

    const quoteForm = document.querySelector('.quote-form');
    if (quoteForm) {
        quoteForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(quoteForm);
            const data = Object.fromEntries(formData);

            alert('Thank you for your quote request! We will get back to you soon.');

            quoteForm.reset();
        });
    }

    const navbar = document.querySelector('.navbar');
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navWrapper = document.querySelector('.nav-wrapper');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            mobileBtn.classList.toggle('active');
            navWrapper.classList.toggle('active');
            document.body.style.overflow = navWrapper.classList.contains('active') ? 'hidden' : '';
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Close mobile menu if open
            if (navWrapper && navWrapper.classList.contains('active')) {
                mobileBtn.classList.remove('active');
                navWrapper.classList.remove('active');
                document.body.style.overflow = '';
            }

            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const fadeElements = document.querySelectorAll('.commercial-content, .commercial-image');

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.2
    });

    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        fadeObserver.observe(el);
    });

    const formInputs = document.querySelectorAll('.form-input, .form-textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other items
            faqItems.forEach(faq => faq.classList.remove('active'));

            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const activeSlide = hero.querySelector('.hero-slide.active');
        if (activeSlide) {
            activeSlide.style.backgroundPositionY = scrolled * 0.5 + 'px';
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;
    let slideInterval;

    console.log('Slides found:', slides.length);
    console.log('Indicators found:', indicators.length);

    function showSlide(index) {
        console.log('Showing slide:', index);
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));

        slides[index].classList.add('active');
        indicators[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        let next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }

    function startAutoPlay() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function resetAutoPlay() {
        clearInterval(slideInterval);
        startAutoPlay();
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            console.log('Indicator clicked:', index);
            showSlide(index);
            resetAutoPlay();
        });
    });

    showSlide(0);

    startAutoPlay();
});

// GSAP Animation Implementation
document.addEventListener('DOMContentLoaded', () => {
    // Only run if GSAP is loaded
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        console.warn('GSAP or ScrollTrigger not found');
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // Initial Setup: Wrap sections for pinning
    const sections = document.querySelectorAll('.commercial-section');
    if (sections.length < 2) return; // Need at least 2 sections

    const section1 = sections[0];
    const section2 = sections[1];

    // Create wrapper
    const pinWrap = document.createElement('div');
    pinWrap.className = 'pin-wrap';

    // Insert wrapper before first section
    section1.parentNode.insertBefore(pinWrap, section1);

    // Move sections into wrapper
    pinWrap.appendChild(section1);
    pinWrap.appendChild(section2);

    // Animation Logic
    ScrollTrigger.matchMedia({
        // Desktop
        "(min-width: 769px)": function () {
            // Ensure Section 2 is initially positioned below Section 1
            gsap.set(section2, { y: '100%', opacity: 1, visibility: 'visible' });

            // Remove CSS transitions that might conflict with GSAP scrub
            gsap.set(section1.querySelector('.commercial-content'), { transition: 'none' });
            gsap.set(section2.querySelector('.commercial-content'), { transition: 'none' });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: pinWrap,
                    start: "top top",
                    end: "+=150%", // Adjusted scroll length
                    pin: true,
                    scrub: true, // Direct scrub, no smoothing for "just move" feel
                    anticipatePin: 1
                }
            });

            // "Curtain" Effect: Section 2 slides up over Section 1
            // Simultaneously, Section 1 text moves up to exit

            tl.to(section1.querySelector('.commercial-content'), {
                y: '-100vh', // Move text up out of view
                ease: "none"
            }, 0)
                .to(section2, {
                    y: '0%', // Slide Section 2 up to cover S1
                    ease: "none"
                }, 0);

            // PARALLAX EFFECT (Restored)
            gsap.to(section1.querySelector('.commercial-image img'), {
                y: -18,
                scale: 1.04,
                ease: "none",
                scrollTrigger: {
                    trigger: pinWrap,
                    start: "top top",
                    end: "+=100%",
                    scrub: true
                }
            });

            gsap.fromTo(section2.querySelector('.commercial-image img'),
                { y: 18, scale: 1.04 },
                {
                    y: -18,
                    scale: 1.04,
                    ease: "none",
                    scrollTrigger: {
                        trigger: pinWrap,
                        start: "top top+=100%",
                        end: "bottom bottom",
                        scrub: true
                    }
                }
            );
        },

        // Mobile / Reduced Motion
        "(max-width: 768px), (prefers-reduced-motion: reduce)": function () {
            // Restore default layout if needed or let CSS handle it
            // CSS handles opacity/visibility reset
        }
    });
});

/* -------------------------------------------------------------------------- */
/* REQUEST ESTIMATE MODAL LOGIC                                               */
/* -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    const estimateBtn = document.getElementById('requestEstimateBtn');
    const modalOverlay = document.getElementById('estimateModal');
    const modalForm = document.getElementById('modalEstimateForm');

    // Safety check
    if (!estimateBtn || !modalOverlay) return;

    // Open Modal
    function openModal() {
        modalOverlay.classList.add('is-open'); // CSS handles opacity/visibility
        document.body.style.overflow = 'hidden'; // Lock scroll

        // Trap focus (simple version)
        const focusable = modalOverlay.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusable.length) focusable[0].focus();
    }

    // Close Modal
    function closeModal() {
        modalOverlay.classList.remove('is-open');
        document.body.style.overflow = ''; // Restore scroll
    }

    // Trigger
    estimateBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });

    // Close on Overlay Click
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Close on ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('is-open')) {
            closeModal();
        }
    });

    // Submit
    if (modalForm) {
        modalForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(modalForm);
            alert('Thank you for your consultation request! We will contact you shortly.');
            console.log('Estimate Request:', Object.fromEntries(formData));
            modalForm.reset();
            closeModal();
        });
    }
});

/* -------------------------------------------------------------------------- */
/* WHY WOODSCAPE CAROUSEL                                                      */
/* -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.getElementById('whyCarouselWrapper');
    const track = document.getElementById('whyCarouselTrack');
    const sTrack = document.getElementById('whyScrollTrack');
    const sThumb = document.getElementById('whyScrollThumb');

    if (!wrapper || !track || !sTrack || !sThumb) return;

    // --- Thumb sizing ---
    function updateThumb() {
        const scrollable = wrapper.scrollWidth - wrapper.clientWidth;
        if (scrollable <= 0) { sThumb.style.width = '100%'; return; }
        const ratio = wrapper.clientWidth / wrapper.scrollWidth;
        const thumbW = Math.max(60, sTrack.offsetWidth * ratio);
        sThumb.style.width = thumbW + 'px';
        const scrollRatio = wrapper.scrollLeft / scrollable;
        sThumb.style.left = (scrollRatio * (sTrack.offsetWidth - thumbW)) + 'px';
    }

    wrapper.addEventListener('scroll', updateThumb);
    window.addEventListener('resize', updateThumb);
    updateThumb();

    // --- Drag scroll on wrapper ---
    let isDragging = false, startX = 0, startScroll = 0;

    wrapper.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        startScroll = wrapper.scrollLeft;
        wrapper.classList.add('is-dragging');
    });
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        wrapper.scrollLeft = startScroll - (e.clientX - startX);
    });
    document.addEventListener('mouseup', () => {
        isDragging = false;
        wrapper.classList.remove('is-dragging');
    });

    // --- Drag scrollbar thumb ---
    let thumbDragging = false, thumbStartX = 0, thumbStartScroll = 0;

    sThumb.addEventListener('mousedown', (e) => {
        e.preventDefault();
        thumbDragging = true;
        thumbStartX = e.clientX;
        thumbStartScroll = wrapper.scrollLeft;
        sThumb.classList.add('is-dragging');
    });
    document.addEventListener('mousemove', (e) => {
        if (!thumbDragging) return;
        const scrollable = wrapper.scrollWidth - wrapper.clientWidth;
        const trackW = sTrack.offsetWidth - sThumb.offsetWidth;
        const delta = (e.clientX - thumbStartX) / trackW * scrollable;
        wrapper.scrollLeft = thumbStartScroll + delta;
    });
    document.addEventListener('mouseup', () => {
        thumbDragging = false;
        sThumb.classList.remove('is-dragging');
    });

    // --- Click on track to jump ---
    sTrack.addEventListener('click', (e) => {
        if (e.target === sThumb) return;
        const rect = sTrack.getBoundingClientRect();
        const ratio = (e.clientX - rect.left) / rect.width;
        wrapper.scrollLeft = ratio * (wrapper.scrollWidth - wrapper.clientWidth);
    });
});

/* -------------------------------------------------------------------------- */
/* CLIENT STORIES VIDEO CAROUSEL                                               */
/* -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.getElementById('clientCarouselWrapper');
    const sTrack = document.getElementById('clientScrollTrack');
    const sThumb = document.getElementById('clientScrollThumb');
    const muteBtn = document.getElementById('clientMuteBtn');

    if (wrapper && sTrack && sThumb) {
        // --- Thumb sizing ---
        function updateThumb() {
            const scrollable = wrapper.scrollWidth - wrapper.clientWidth;
            if (scrollable <= 0) { sThumb.style.width = '100%'; return; }
            const ratio = wrapper.clientWidth / wrapper.scrollWidth;
            const thumbW = Math.max(60, sTrack.offsetWidth * ratio);
            sThumb.style.width = thumbW + 'px';
            const scrollRatio = wrapper.scrollLeft / scrollable;
            sThumb.style.left = (scrollRatio * (sTrack.offsetWidth - thumbW)) + 'px';
        }

        wrapper.addEventListener('scroll', updateThumb);
        window.addEventListener('resize', updateThumb);
        updateThumb();

        // --- Drag scroll on wrapper ---
        let isDragging = false, startX = 0, startScroll = 0;

        wrapper.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
            startScroll = wrapper.scrollLeft;
            wrapper.classList.add('is-dragging');
        });
        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            wrapper.scrollLeft = startScroll - (e.clientX - startX);
        });
        document.addEventListener('mouseup', () => {
            isDragging = false;
            wrapper.classList.remove('is-dragging');
        });

        // --- Drag scrollbar thumb ---
        let thumbDragging = false, thumbStartX = 0, thumbStartScroll = 0;

        sThumb.addEventListener('mousedown', (e) => {
            e.preventDefault();
            thumbDragging = true;
            thumbStartX = e.clientX;
            thumbStartScroll = wrapper.scrollLeft;
            sThumb.classList.add('is-dragging');
        });
        document.addEventListener('mousemove', (e) => {
            if (!thumbDragging) return;
            const scrollable = wrapper.scrollWidth - wrapper.clientWidth;
            const trackW = sTrack.offsetWidth - sThumb.offsetWidth;
            const delta = (e.clientX - thumbStartX) / trackW * scrollable;
            wrapper.scrollLeft = thumbStartScroll + delta;
        });
        document.addEventListener('mouseup', () => {
            thumbDragging = false;
            sThumb.classList.remove('is-dragging');
        });

        // --- Click on track to jump ---
        sTrack.addEventListener('click', (e) => {
            if (e.target === sThumb) return;
            const rect = sTrack.getBoundingClientRect();
            const ratio = (e.clientX - rect.left) / rect.width;
            wrapper.scrollLeft = ratio * (wrapper.scrollWidth - wrapper.clientWidth);
        });
    }

    // --- Mute Toggle Logic ---
    // --- Individual Smart Mute Logic ---
    const muteButtons = document.querySelectorAll('.client-video-mute-btn');
    const videos = document.querySelectorAll('.client-video-card video');

    if (muteButtons.length > 0 && videos.length > 0) {
        // defined icons
        const iconMuted = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <line x1="23" y1="9" x2="17" y2="15"></line>
                <line x1="17" y1="9" x2="23" y2="15"></line>
            </svg>`;

        const iconUnmuted = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
            </svg>`;

        // Helper to update button state
        function updateButton(btn, isMuted) {
            btn.innerHTML = isMuted ? iconMuted : iconUnmuted;
            // Optional: change style to indicate active state
            if (!isMuted) {
                btn.style.background = 'var(--primary-red)';
                btn.style.borderColor = 'var(--primary-red)';
            } else {
                btn.style.background = 'rgba(255, 255, 255, 0.2)';
                btn.style.borderColor = 'rgba(255, 255, 255, 0.4)';
            }
        }

        muteButtons.forEach((btn, index) => {
            const video = videos[index];
            if (!video) return;

            // Ensure initial state match (video is muted by default HTML)
            updateButton(btn, true);

            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const isNowMuted = !video.muted;

                if (!isNowMuted) {
                    // Unmuting this video -> Mute all others
                    videos.forEach((v, i) => {
                        if (i !== index && !v.muted) {
                            v.muted = true;
                            updateButton(muteButtons[i], true);
                        }
                    });
                }

                // Toggle this video
                video.muted = isNowMuted;
                updateButton(btn, isNowMuted);
            });
        });
    }
});
