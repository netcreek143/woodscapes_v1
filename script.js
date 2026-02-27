/* -----------------------------------------------------------------------
   SCROLL SPY — Active nav link tracking
   ----------------------------------------------------------------------- */
(function () {
    const sections = [
        { id: 'services', href: '#services' },
        { id: 'projects', href: '#projects' },
        { id: 'industries', href: '#industries' },
        { id: 'why-woodscape', href: '#why-woodscape' },
        { id: 'case-studies', href: '#case-studies' },
    ];

    function setActive(href) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === href) {
                link.classList.add('active');
            }
        });
    }

    // Home link goes active when above the first anchor section
    function checkHome() {
        const first = document.getElementById('services');
        if (!first) return false;
        return window.scrollY < first.getBoundingClientRect().top + window.scrollY - 200;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const match = sections.find(s => s.id === entry.target.id);
                    if (match) setActive(match.href);
                }
            });
        },
        {
            rootMargin: '-120px 0px -50% 0px', // trigger when top of section crosses below navbar
            threshold: 0
        }
    );

    document.addEventListener('DOMContentLoaded', () => {
        sections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        // Reset to Home when scrolled back to top
        window.addEventListener('scroll', () => {
            if (checkHome()) setActive('#');
        }, { passive: true });
    });
})();

document.addEventListener('DOMContentLoaded', () => {

    const quoteForm = document.querySelector('.quote-form');
    if (quoteForm) {
        quoteForm.addEventListener('submit', (e) => {
            e.preventDefault();
            window.location.href = 'thank-you.html';
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


document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        const contents = document.querySelectorAll('.hero-content');
        contents.forEach(content => content.classList.remove('active'));

        slides[index].classList.add('active');
        indicators[index].classList.add('active');
        if (contents[index]) contents[index].classList.add('active');
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
            showSlide(index);
            resetAutoPlay();
        });
    });

    showSlide(0);

    startAutoPlay();
});



/* -------------------------------------------------------------------------- */
/* REQUEST ESTIMATE MODAL LOGIC                                               */
/* -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    const estimateBtns = document.querySelectorAll('.open-estimate-modal');
    const modalOverlay = document.getElementById('estimateModal');
    const modalForm = document.getElementById('modalEstimateForm');

    // Safety check
    if (!modalOverlay) return;

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

    // Triggers
    estimateBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
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
            window.location.href = 'thank-you.html';
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

    // --- Auto Scroll ---
    let autoScrollInterval;
    const scrollStep = track.firstElementChild ? track.firstElementChild.offsetWidth + 24 : 410; // Match card width + gap

    function startAutoScroll() {
        autoScrollInterval = setInterval(() => {
            const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;
            if (wrapper.scrollLeft >= maxScroll - 10) {
                wrapper.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                wrapper.scrollBy({ left: scrollStep, behavior: 'smooth' });
            }
        }, 3000);
    }

    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }

    wrapper.addEventListener('mouseenter', stopAutoScroll);
    wrapper.addEventListener('mouseleave', startAutoScroll);
    startAutoScroll();
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

/* -------------------------------------------------------------------------- */
/* CAROUSEL REVEAL ANIMATIONS                                                 */
/* -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    const revealCards = document.querySelectorAll('.reveal-card');

    if (revealCards.length === 0) return;

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a small delay based on index for staggering effect if multiple enter at once
                // However, since they enter individually as we scroll sideways, simple reveal is usually fine.
                // For vertical scroll (entrance), staggering works well.
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before it fully enters
    });

    revealCards.forEach(card => {
        revealObserver.observe(card);
    });
});


/* -------------------------------------------------------------------------- */
/* COMMERCIAL SECTION GSAP ANIMATIONS                                          */
/* -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        console.warn('GSAP or ScrollTrigger not found');
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const sections = document.querySelectorAll('.commercial-section');
    if (sections.length < 2) return;

    const section1 = sections[0];
    const section2 = sections[1];

    // Create a container for pinning
    const pinWrap = document.createElement('div');
    pinWrap.className = 'pin-wrap';
    section1.parentNode.insertBefore(pinWrap, section1);
    pinWrap.appendChild(section1);
    pinWrap.appendChild(section2);

    // Delay slightly to prevent initial render "shake" or layout thrashing
    setTimeout(() => {
        ScrollTrigger.matchMedia({
            // Desktop pinning and transition
            "(min-width: 769px)": function () {
                // Initial states
                gsap.set(section2, {
                    y: '100%',
                    opacity: 1,
                    visibility: 'visible'
                });

                // Disable standard transitions during scroll
                gsap.set(section1.querySelector('.commercial-content'), { transition: 'none' });
                gsap.set(section2.querySelector('.commercial-content'), { transition: 'none' });

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: pinWrap,
                        start: "top top",
                        end: "+=150%",
                        pin: true,
                        scrub: true,
                        anticipatePin: 1
                    }
                });

                // Content transition
                tl.to(section1.querySelector('.commercial-content'), {
                    y: '-100vh',
                    ease: "none"
                }, 0)
                    .to(section2, {
                        y: '0%',
                        ease: "none"
                    }, 0);

                // Parallel image parallax
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
            }
        });
    }, 100);
});

/* -------------------------------------------------------------------------- */
/* BEFORE/AFTER IMAGE SLIDER (FEATURED CASE STUDY)                             */
/* -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    const beforePanel = document.querySelector('.before-slider');
    const afterPanel = document.querySelector('.after-slider');

    if (beforePanel && afterPanel) {
        const beforeImages = beforePanel.querySelectorAll('img');
        const afterImages = afterPanel.querySelectorAll('img');
        let currentIndex = 0;
        const totalImages = beforeImages.length;

        if (totalImages > 1) {
            setInterval(() => {
                // Remove active class from current images
                beforeImages[currentIndex].classList.remove('active');
                afterImages[currentIndex].classList.remove('active');

                // Increment index
                currentIndex = (currentIndex + 1) % totalImages;

                // Add active class to new images
                beforeImages[currentIndex].classList.add('active');
                afterImages[currentIndex].classList.add('active');
            }, 4000); // 4 seconds delay for a more subtle transition
        }
    }

    // Initialize Custom Dropdowns
    const dropdownService = document.getElementById('dropdownService');
    const dropdownBudget = document.getElementById('dropdownBudget');

    if (dropdownService) initCustomDropdown(dropdownService);
    if (dropdownBudget) initCustomDropdown(dropdownBudget);
});

function initCustomDropdown(dropdown) {
    const selected = dropdown.querySelector('.dropdown-selected');
    const options = dropdown.querySelector('.dropdown-options');
    const optionList = dropdown.querySelectorAll('.dropdown-option');
    const hiddenInput = dropdown.querySelector('input[type="hidden"]');

    selected.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = dropdown.classList.contains('open');

        // Close all other dropdowns first
        document.querySelectorAll('.custom-dropdown').forEach(d => d.classList.remove('open'));

        if (!isOpen) {
            dropdown.classList.add('open');
        }
    });

    optionList.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const val = option.getAttribute('data-value');
            selected.textContent = val;
            selected.classList.remove('placeholder');
            hiddenInput.value = val;
            dropdown.classList.remove('open');
        });
    });

    // Close on click outside
    document.addEventListener('click', () => {
        dropdown.classList.remove('open');
    });
}

/* -------------------------------------------------------------------------- */
/* TESTIMONIAL SLIDER (Client Experience)                                      */
/* -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const testimonialDots = document.querySelectorAll('.tdot');
    let currentTestimonial = 0;
    let testimonialInterval;

    function showTestimonial(index) {
        // Remove active class from all
        testimonialSlides.forEach(slide => slide.classList.remove('active'));
        testimonialDots.forEach(dot => dot.classList.remove('active'));

        // Add to targeted
        testimonialSlides[index].classList.add('active');
        testimonialDots[index].classList.add('active');
        currentTestimonial = index;
    }

    function nextTestimonial() {
        let next = (currentTestimonial + 1) % testimonialSlides.length;
        showTestimonial(next);
    }

    function startTestimonialTimer() {
        stopTestimonialTimer();
        testimonialInterval = setInterval(nextTestimonial, 5000); // Change every 5 seconds
    }

    function stopTestimonialTimer() {
        if (testimonialInterval) clearInterval(testimonialInterval);
    }

    // Initialize
    if (testimonialSlides.length > 0) {
        startTestimonialTimer();

        // Dot Click logic
        testimonialDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showTestimonial(index);
                startTestimonialTimer(); // Reset timer on manual click
            });
        });

        // Optional: Pause on hover
        const container = document.querySelector('.case-testimonial-card');
        if (container) {
            container.addEventListener('mouseenter', stopTestimonialTimer);
            container.addEventListener('mouseleave', startTestimonialTimer);
        }
    }
});
