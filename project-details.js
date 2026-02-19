document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // FAQ Accordion
    // ==========================================
    const faqHeaders = document.querySelectorAll('.pd-accordion-header');

    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');

            // Close all other items (optional, but cleaner)
            document.querySelectorAll('.pd-accordion-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
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
    const nextProjectBtn = document.querySelector('.pd-next-project-btn');
    const counterDisplay = document.querySelector('.pd-gallery-counter');
    let currentProjectIndex = 1;
    const totalProjects = 7;

    if (nextProjectBtn && counterDisplay) {
        nextProjectBtn.addEventListener('click', () => {
            // Increment logic
            currentProjectIndex++;
            if (currentProjectIndex > totalProjects) {
                currentProjectIndex = 1;
            }

            // Update display
            counterDisplay.textContent = `${currentProjectIndex} / ${totalProjects}`;

            // Visual feedback
            nextProjectBtn.style.transform = 'translateX(5px)';
            setTimeout(() => {
                nextProjectBtn.style.transform = 'translateX(0)';
            }, 200);
        });
    }
});
