document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // FAQ Accordion
    // ==========================================
    const faqBtns = document.querySelectorAll('.faq-question-btn');

    faqBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // If already active, do nothing (keep it open)
            if (btn.classList.contains('active')) return;

            // Close all panels
            faqBtns.forEach(b => {
                b.classList.remove('active');
                b.nextElementSibling.classList.remove('open');
                const polyline = b.querySelector('.faq-icon polyline');
                if (polyline) polyline.setAttribute('points', '7 7 17 7 17 17');
            });

            // Open the clicked one
            btn.classList.add('active');
            btn.nextElementSibling.classList.add('open');
            // Note: The icon rotation is handled by CSS on .active
        });
    });

    // ==========================================
    // Form Validation & Success Toast
    // ==========================================
    const form = document.getElementById('estimateForm');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Basic validation check (browser handles 'required', this is double check)
            const inputs = form.querySelectorAll('input, select');
            let isValid = true;

            inputs.forEach(input => {
                if (input.hasAttribute('required') && !input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = 'transparent';
                }
            });

            if (isValid) {
                // Show success toast
                showToast('Estimate request sent successfully! We will contact you shortly.');
                form.reset();
            }
        });
    }

    function showToast(message) {
        // Create toast element
        const toast = document.createElement('div');
        toast.textContent = message;
        toast.style.position = 'fixed';
        toast.style.bottom = '20px';
        toast.style.right = '20px';
        toast.style.background = '#0b1324'; // Navy
        toast.style.color = '#fff';
        toast.style.padding = '16px 24px';
        toast.style.borderRadius = '4px';
        toast.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
        toast.style.zIndex = '1000';
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
        toast.style.transition = 'all 0.3s ease';

        document.body.appendChild(toast);

        // Animate in
        setTimeout(() => {
            toast.style.opacity = '1';
            toast.style.transform = 'translateY(0)';
        }, 10);

        // Remove after 3 seconds
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(20px)';
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 4000);
    }

    // ==========================================
    // Gallery Navigation (Simple Counter)
    // ==========================================
    const nextBtn = document.querySelector('.pd-g-next');
    const counterDisplay = document.querySelector('.pd-gallery-counter');
    let currentProjectIndex = 1;
    const totalProjects = 7;

    if (nextBtn && counterDisplay) {
        nextBtn.addEventListener('click', () => {
            currentProjectIndex++;
            if (currentProjectIndex > totalProjects) {
                currentProjectIndex = 1;
            }
            counterDisplay.textContent = `${currentProjectIndex} / ${totalProjects}`;
        });
    }
});

// ==========================================
// Stories Carousel
// ==========================================
(function () {
    const carousel = document.getElementById('storiesCarousel');
    const wrapper = carousel ? carousel.parentElement : null;
    const prevBtn = document.getElementById('storiesPrevBtn');
    const nextBtn = document.getElementById('storiesNextBtn');
    const track = document.getElementById('storiesScrollTrack');
    const thumb = document.getElementById('storiesScrollThumb');

    if (!carousel || !wrapper || !track || !thumb) return;

    const isMobile = window.innerWidth <= 600;
    const CARD_STEP = isMobile ? 320 : 410; // card width + gap
    let currentX = 0;

    function getMaxX() {
        return carousel.scrollWidth - wrapper.clientWidth;
    }

    function clamp(val, min, max) {
        return Math.max(min, Math.min(max, val));
    }

    function applyTranslate(x) {
        currentX = clamp(x, 0, getMaxX());
        carousel.style.transform = 'translateX(-' + currentX + 'px)';
        syncThumb();
    }

    function syncThumb() {
        var maxX = getMaxX();
        var ratio = maxX > 0 ? currentX / maxX : 0;
        var trackW = track.clientWidth;
        var thumbW = Math.max(60, trackW * (wrapper.clientWidth / carousel.scrollWidth));
        var maxLeft = trackW - thumbW;
        thumb.style.width = thumbW + 'px';
        thumb.style.left = (ratio * maxLeft) + 'px';
    }

    // Button nav
    if (prevBtn) {
        prevBtn.addEventListener('click', function () {
            applyTranslate(currentX - CARD_STEP);
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', function () {
            applyTranslate(currentX + CARD_STEP);
        });
    }

    // Drag on carousel
    var isDragging = false;
    var dragStartX = 0;
    var dragStartScrollX = 0;

    wrapper.addEventListener('mousedown', function (e) {
        isDragging = true;
        dragStartX = e.clientX;
        dragStartScrollX = currentX;
        wrapper.classList.add('is-dragging');
        carousel.style.transition = 'none';
    });

    document.addEventListener('mousemove', function (e) {
        if (!isDragging) return;
        var dx = e.clientX - dragStartX;
        applyTranslate(dragStartScrollX - dx);
    });

    document.addEventListener('mouseup', function () {
        if (!isDragging) return;
        isDragging = false;
        wrapper.classList.remove('is-dragging');
        carousel.style.transition = '';
    });

    // Touch drag
    wrapper.addEventListener('touchstart', function (e) {
        dragStartX = e.touches[0].clientX;
        dragStartScrollX = currentX;
        carousel.style.transition = 'none';
    }, { passive: true });

    wrapper.addEventListener('touchmove', function (e) {
        var dx = e.touches[0].clientX - dragStartX;
        applyTranslate(dragStartScrollX - dx);
    }, { passive: true });

    wrapper.addEventListener('touchend', function () {
        carousel.style.transition = '';
    });

    // Scrollbar track click
    track.addEventListener('click', function (e) {
        if (e.target === thumb) return;
        var rect = track.getBoundingClientRect();
        var clickRatio = (e.clientX - rect.left) / rect.width;
        applyTranslate(clickRatio * getMaxX());
        if (storiesSectionVisible) resetStoriesAutoScroll();
    });

    // ── Stories Auto Scroll Logic ────────────────────────────────────
    let storiesAutoInterval;
    const STORIES_AUTO_DELAY = 3500;

    function startStoriesAutoScroll() {
        storiesAutoInterval = setInterval(() => {
            let nextX = currentX + CARD_STEP;
            if (nextX > getMaxX()) {
                nextX = 0;
            }
            carousel.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            applyTranslate(nextX);
        }, STORIES_AUTO_DELAY);
    }

    function stopStoriesAutoScroll() {
        clearInterval(storiesAutoInterval);
    }

    function resetStoriesAutoScroll() {
        stopStoriesAutoScroll();
        startStoriesAutoScroll();
    }

    // Pause on hover
    wrapper.addEventListener('mouseenter', stopStoriesAutoScroll);
    wrapper.addEventListener('mouseleave', () => {
        if (storiesSectionVisible) startStoriesAutoScroll();
    });

    // Start only when section is in view
    let storiesSectionVisible = false;
    const storiesSection = document.getElementById('projects');
    if (storiesSection) {
        const storiesObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    storiesSectionVisible = true;
                    startStoriesAutoScroll();
                } else {
                    storiesSectionVisible = false;
                    stopStoriesAutoScroll();
                }
            });
        }, { threshold: 0.2 });
        storiesObserver.observe(storiesSection);
    }

    // Scrollbar thumb drag
    var thumbDragging = false;
    var thumbDragStartX = 0;
    var thumbDragStartScrollX = 0;

    thumb.addEventListener('mousedown', function (e) {
        e.stopPropagation();
        thumbDragging = true;
        thumbDragStartX = e.clientX;
        thumbDragStartScrollX = currentX;
        thumb.classList.add('is-dragging');
        carousel.style.transition = 'none';
    });

    document.addEventListener('mousemove', function (e) {
        if (!thumbDragging) return;
        var dx = e.clientX - thumbDragStartX;
        var trackW = track.clientWidth;
        var thumbW = thumb.clientWidth;
        var maxLeft = trackW - thumbW;
        var ratio = maxLeft > 0 ? dx / maxLeft : 0;
        applyTranslate(thumbDragStartScrollX + ratio * getMaxX());
    });

    document.addEventListener('mouseup', function () {
        if (!thumbDragging) return;
        thumbDragging = false;
        thumb.classList.remove('is-dragging');
        carousel.style.transition = '';
    });
    // Init
    syncThumb();
    window.addEventListener('resize', syncThumb);
})();

// ==========================================
// DYNAMIC PROJECT DIARY ENGINE
// Reads ?card=N → populates content → hides active card
// ==========================================
(function () {
    var PROJECTS = [
        {
            id: 1,
            img: './images/successstories1.jpg',
            name: 'ABC Infrastructure \u2013 Commercial Development',
            sub: 'Delivering engineered precision, cost efficiency, and on-time execution for a multi-phase commercial real estate project in Central Texas.',
            industry: 'Real Estate',
            location: 'Central Texas',
            timeline: 'Jan 2024 \u2013 Jun 2024',
            size: '20,000 Sq.ft',
            p1: 'ABC Infrastructure partnered with Woodscape Engineering to execute a large-scale commercial development designed for long-term asset performance and tenant-ready delivery. The project demanded a rigorous approach to structural integrity, MEP coordination, and façade integration.',
            p2: 'The scope included full structural execution, MEP coordination, façade integration, and compliance-led construction management. The objective was clear \u2014 deliver a cost-optimised commercial asset without compromising quality, safety, or timeline predictability.',
            gallery: [
                './images/successstories1.jpg',
                './images/successstories2.jpg',
                './images/successstories3.jpg',
                './images/featuresectionimg.jpg'
            ]
        },
        {
            id: 2,
            img: './images/successstories2.jpg',
            name: 'YB Retail Group \u2013 Retail Expansion',
            sub: 'Transforming high-footfall retail environments through precision fit-out and sustainable design across Austin, TX.',
            industry: 'Retail',
            location: 'Austin, TX',
            timeline: 'Mar 2024 \u2013 Aug 2024',
            size: '14,500 Sq.ft',
            p1: 'YB Retail Group engaged Woodscape Engineering to deliver a fast-track retail fit-out across multiple zones, requiring simultaneous coordination of civil, MEP, and interior works within a live mall environment with strict noise and access schedules.',
            p2: 'Through precise phasing and proactive site management, we achieved a 35% improvement in customer engagement-ready spaces, on-time handover in all zones, and full compliance with mall authority specifications \u2014 setting a new delivery benchmark for YB Retail.',
            gallery: [
                './images/successstories2.jpg',
                './images/successstories1.jpg',
                './images/successstories3.jpg',
                './images/featuresectionimg.jpg'
            ]
        },
        {
            id: 3,
            img: './images/successstories3.jpg',
            name: 'LMN Tech Solutions \u2013 Campus Infrastructure',
            sub: 'Engineering a high-performance technology campus with zero-downtime execution and advanced MEP systems in Dallas, TX.',
            industry: 'Technology',
            location: 'Dallas, TX',
            timeline: 'Feb 2024 \u2013 May 2024',
            size: '18,200 Sq.ft',
            p1: 'LMN Tech Solutions required a mission-critical infrastructure upgrade to support expanded server operations and office capacity. Woodscape Engineering led the structural and MEP execution across the Dallas campus, working within tight operational windows to avoid business disruption.',
            p2: 'By deploying a dedicated shutdown-methodology for sensitive zones and a parallel phasing strategy for low-impact areas, we reduced total system downtime by 50% against initial estimates and delivered the project two weeks ahead of schedule with full commissioning sign-off.',
            gallery: [
                './images/successstories3.jpg',
                './images/successstories1.jpg',
                './images/successstories2.jpg',
                './images/featuresectionimg.jpg'
            ]
        },
        {
            id: 4,
            img: './images/successstories1.jpg',
            name: 'Greenfield Hospitality \u2013 Hotel Renovation',
            sub: 'Complete hotel renovation with a focus on guest experience, mechanical upgrades, and brand-standard compliance in Houston, TX.',
            industry: 'Hospitality',
            location: 'Houston, TX',
            timeline: 'May 2024 \u2013 Oct 2024',
            size: '32,000 Sq.ft',
            p1: 'Greenfield Hospitality commissioned Woodscape Engineering to lead a comprehensive renovation of a 200-key hotel property in downtown Houston. The scope covered room refurbishment, lobby redesign, back-of-house reconfiguration, and full MEP replacement \u2014 all while the property remained partially operational.',
            p2: 'Leveraging a floor-by-floor sequencing strategy, we maintained 60% room availability throughout construction, ultimately completing the project 15% under the approved budget through rigorous value engineering and supplier optimisation \u2014 delivering a fully branded, guest-ready asset ahead of the peak season.',
            gallery: [
                './images/successstories1.jpg',
                './images/successstories2.jpg',
                './images/successstories3.jpg',
                './images/featuresectionimg.jpg'
            ]
        },
        {
            id: 5,
            img: './images/successstories2.jpg',
            name: 'MedCore Healthcare \u2013 Medical Facility Build',
            sub: 'Constructing a state-of-the-art medical facility to the highest healthcare compliance standards with zero safety incidents in San Antonio, TX.',
            industry: 'Healthcare',
            location: 'San Antonio, TX',
            timeline: 'Jul 2024 \u2013 Nov 2024',
            size: '25,800 Sq.ft',
            p1: 'MedCore Healthcare selected Woodscape Engineering to deliver a greenfield medical facility combining diagnostic imaging suites, outpatient consultation spaces, and administrative offices. The project demanded stringent infection control protocols, specialist MEP for medical gas systems, and regulatory compliance at every stage.',
            p2: 'Through an integrated safety management system and daily compliance audits, we achieved project completion with zero safety incidents recorded. The facility passed all health authority inspections on the first submission and was handed over fully operational, enabling MedCore to begin patient admissions on the projected opening date.',
            gallery: [
                './images/successstories2.jpg',
                './images/successstories1.jpg',
                './images/successstories3.jpg',
                './images/featuresectionimg.jpg'
            ]
        },
        {
            id: 6,
            img: './images/successstories3.jpg',
            name: 'PinePeak Institutions \u2013 Campus Expansion',
            sub: 'Delivering a multi-building educational campus expansion ahead of schedule through phased construction excellence in Fort Worth, TX.',
            industry: 'Education',
            location: 'Fort Worth, TX',
            timeline: 'Aug 2024 \u2013 Dec 2024',
            size: '41,000 Sq.ft',
            p1: 'PinePeak Institutions appointed Woodscape Engineering to manage the phased expansion of their primary campus, encompassing a new academic block, administrative centre, and outdoor infrastructure upgrade. Execution had to align with the academic calendar to ensure zero disruption to ongoing classes.',
            p2: 'By deploying an accelerated construction programme with night-shift resources during critical path activities, Woodscape delivered the entire campus expansion 3 weeks ahead of schedule \u2014 enabling PinePeak to enrol additional students for the upcoming academic term ahead of projections.',
            gallery: [
                './images/successstories3.jpg',
                './images/successstories1.jpg',
                './images/successstories2.jpg',
                './images/featuresectionimg.jpg'
            ]
        },
        {
            id: 7,
            img: './images/successstories1.jpg',
            name: 'SkyHigh Corporate \u2013 Office Fit-Out',
            sub: 'Creating a productivity-optimised corporate workspace through precision interior fit-out and smart building integration in Austin, TX.',
            industry: 'Corporate',
            location: 'Austin, TX',
            timeline: 'Sep 2023 \u2013 Feb 2024',
            size: '11,600 Sq.ft',
            p1: 'SkyHigh Corporate engaged Woodscape Engineering to transform a raw shell space into a fully fitted, brand-aligned headquarters. The project required integration of collaborative workspaces, private executive suites, server room construction, and a bespoke reception environment \u2014 all coordinated around live business operations in adjacent floors.',
            p2: 'The completed fit-out delivered a 28% improvement in staff productivity metrics within the first quarter of occupation, attributed to optimised spatial planning, enhanced natural light integration, and acoustic treatment throughout. The project was completed on time and within budget across all phases.',
            gallery: [
                './images/successstories1.jpg',
                './images/successstories2.jpg',
                './images/successstories3.jpg',
                './images/featuresectionimg.jpg'
            ]
        },
        {
            id: 8,
            img: './images/successstories2.jpg',
            name: 'NovaBuild Retail \u2013 Flagship Store Rollout',
            sub: 'Executing a high-spec national flagship store rollout with 100% on-time delivery and consistent brand standards across El Paso, TX.',
            industry: 'Retail',
            location: 'El Paso, TX',
            timeline: 'Nov 2023 \u2013 Apr 2024',
            size: '9,400 Sq.ft',
            p1: 'NovaBuild Retail contracted Woodscape Engineering to deliver their flagship store concept \u2014 a premium retail environment with bespoke joinery, integrated display lighting, and a curated customer journey layout. The brief demanded strict brand compliance, fast-track execution, and coordination with the client\u2019s national visual merchandising team.',
            p2: 'Through a dedicated project management structure and pre-fabrication of key joinery elements off-site, Woodscape achieved 100% on-time delivery across all project phases. The completed flagship became the brand\u2019s highest-performing store in the region within the first month of trading, validating the investment in premium fit-out standards.',
            gallery: [
                './images/successstories2.jpg',
                './images/successstories1.jpg',
                './images/successstories3.jpg',
                './images/featuresectionimg.jpg'
            ]
        }
    ];
    var params = new URLSearchParams(window.location.search);
    var cardId = parseInt(params.get('card'), 10);
    if (!cardId || cardId < 1 || cardId > 8) cardId = 1;
    var proj = PROJECTS[cardId - 1];
    function setText(id, val) { var el = document.getElementById(id); if (el) el.textContent = val; }
    var heroImg = document.getElementById('pd-hero-img');
    if (heroImg) { heroImg.src = proj.img; heroImg.alt = proj.name; }
    setText('pd-project-name', proj.name);
    setText('pd-project-sub', proj.sub);
    setText('pd-meta-industry', proj.industry);
    setText('pd-meta-location', proj.location);
    setText('pd-meta-timeline', proj.timeline);
    setText('pd-meta-size', proj.size);
    setText('pd-overview-p1', proj.p1);
    setText('pd-overview-p2', proj.p2);
    setText('pd-page-counter', cardId + '/8');
    document.title = proj.name + ' | Woodscape Engineering';
    var activeCard = document.querySelector('[data-card-id="' + cardId + '"]');
    if (activeCard) activeCard.style.display = 'none';
    var prevId = cardId === 1 ? 8 : cardId - 1;
    var nextId = cardId === 8 ? 1 : cardId + 1;
    var prevBtn = document.querySelector('.pd-nav-arrow.pd-prev');
    var nextBtn2 = document.querySelector('.pd-nav-arrow.pd-next');
    if (prevBtn) prevBtn.addEventListener('click', function () { window.location.href = 'project-details.html?card=' + prevId; });
    // --- GALLERY LOGIC (REFINED) ---
    var gallerySlider = document.getElementById('pd-gallery-slider');
    var galleryPrev = document.getElementById('galleryPrevBtn');
    var galleryNext = document.getElementById('galleryNextBtn');
    var galleryCurrentEl = document.getElementById('galleryCurrent');
    var galleryTotalEl = document.getElementById('galleryTotal');

    if (gallerySlider && proj.gallery) {
        gallerySlider.innerHTML = ''; // Clear placeholders
        if (galleryTotalEl) galleryTotalEl.textContent = proj.gallery.length;

        proj.gallery.forEach(function (imgSrc, index) {
            var item = document.createElement('div');
            item.className = 'pd-gallery-item';
            item.innerHTML = '<img src="' + imgSrc + '" alt="' + proj.name + ' image ' + (index + 1) + '">';
            item.addEventListener('click', function () {
                openLightbox(index);
            });
            gallerySlider.appendChild(item);
        });

        // Update counter based on scroll
        gallerySlider.addEventListener('scroll', function () {
            var scrollLeft = gallerySlider.scrollLeft;
            var itemWidth = gallerySlider.querySelector('.pd-gallery-item').offsetWidth + 20; // width + gap
            var currentIndex = Math.round(scrollLeft / itemWidth) + 1;
            if (galleryCurrentEl) galleryCurrentEl.textContent = Math.min(currentIndex, proj.gallery.length);
        });

        if (galleryPrev) {
            galleryPrev.addEventListener('click', function () {
                var itemWidth = gallerySlider.querySelector('.pd-gallery-item').offsetWidth + 20;
                gallerySlider.scrollBy({ left: -itemWidth, behavior: 'smooth' });
            });
        }
        if (galleryNext) {
            galleryNext.addEventListener('click', function () {
                var itemWidth = gallerySlider.querySelector('.pd-gallery-item').offsetWidth + 20;
                gallerySlider.scrollBy({ left: itemWidth, behavior: 'smooth' });
            });
        }
    }

    // --- LIGHTBOX LOGIC ---
    var lightbox = document.getElementById('pdLightbox');
    var lightboxImg = document.getElementById('lightboxImg');
    var lightboxClose = document.getElementById('lightboxClose');
    var lightboxPrev = document.getElementById('lightboxPrev');
    var lightboxNext = document.getElementById('lightboxNext');
    var lightboxCount = document.getElementById('lightboxCounter');
    var currentImgIndex = 0;

    function openLightbox(index) {
        if (!lightbox || !lightboxImg) return;
        currentImgIndex = index;
        updateLightboxImage();
        lightbox.style.display = 'flex';
        setTimeout(function () {
            lightbox.classList.add('is-open');
        }, 10);
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        if (!lightbox) return;
        lightbox.classList.remove('is-open');
        setTimeout(function () {
            lightbox.style.display = 'none';
        }, 300);
        document.body.style.overflow = '';
    }

    function updateLightboxImage() {
        if (proj.gallery && proj.gallery[currentImgIndex]) {
            lightboxImg.src = proj.gallery[currentImgIndex];
            if (lightboxCount) {
                lightboxCount.textContent = (currentImgIndex + 1) + ' / ' + proj.gallery.length;
            }
        }
    }

    function navigateLightbox(direction) {
        if (!proj.gallery) return;
        currentImgIndex += direction;
        if (currentImgIndex < 0) currentImgIndex = proj.gallery.length - 1;
        if (currentImgIndex >= proj.gallery.length) currentImgIndex = 0;
        updateLightboxImage();
    }

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxPrev) lightboxPrev.addEventListener('click', function (e) { e.stopPropagation(); navigateLightbox(-1); });
    if (lightboxNext) lightboxNext.addEventListener('click', function (e) { e.stopPropagation(); navigateLightbox(1); });

    if (lightbox) {
        lightbox.addEventListener('click', function (e) {
            if (e.target === lightbox) closeLightbox();
        });
    }

    document.addEventListener('keydown', function (e) {
        if (!lightbox || !lightbox.classList.contains('is-open')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
        if (e.key === 'ArrowRight') navigateLightbox(1);
    });
})();
