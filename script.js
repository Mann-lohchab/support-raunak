/* ============================================
   SUPPORT RAUNAK - Compassionate Redesign
   
   Gentle, unobtrusive JavaScript that supports
   the experience without being attention-demanding.
   ============================================ */

/* ============================================
   ============================================
   EDITABLE SECTION - FAMILY UPDATES
   
   The family only needs to edit the values below
   to update the fundraiser progress.
   ============================================
   ============================================ */

/**
 * AMOUNT RAISED (in Indian Rupees)
 * 
 * INSTRUCTIONS:
 * 1. Update this number when you receive new donations
 * 2. Enter the total amount raised so far (without commas)
 * 3. The progress bar will update automatically
 * 
 * Example: If you've raised â¹2,50,000, enter: 250000
 * Example: If you've raised â¹5,00,000, enter: 500000
 */
let amountRaised = 250000;

/**
 * GOAL AMOUNT (in Indian Rupees)
 * 
 * This is the fundraising goal. Change only if needed.
 */
const goalAmount = 1000000;

/**
 * UPDATE DATE
 * 
 * Change this when you update the medical status.
 * This helps visitors know how recent the information is.
 */
let updateDate = 'February 2024';

/* ============================================
   END OF EDITABLE SECTION
   ============================================ */

// ============================================
// DOM ELEMENTS
// ============================================
const progressFill = document.getElementById('progressFill');
const amountRaisedElement = document.getElementById('amountRaised');
const updateDateElement = document.getElementById('updateDate');
const toast = document.getElementById('toast');

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Format number as Indian Rupees
 * @param {number} amount - The amount to format
 * @returns {string} Formatted currency string
 */
function formatCurrency(amount) {
    return 'â¹' + amount.toLocaleString('en-IN');
}

/**
 * Calculate percentage of goal reached
 * @param {number} raised - Amount raised
 * @param {number} goal - Goal amount
 * @returns {number} Percentage (0-100)
 */
function calculatePercentage(raised, goal) {
    const percentage = (raised / goal) * 100;
    return Math.min(Math.max(percentage, 0), 100);
}

// ============================================
// PROGRESS BAR - Gentle animation
// ============================================

/**
 * Animate the progress bar with a gentle, slow fill
 * @param {number} targetPercentage - Target percentage
 */
function animateProgressBar(targetPercentage) {
    if (!progressFill) return;
    
    // Small delay before animation starts
    // This creates a more gentle, considered feel
    setTimeout(() => {
        progressFill.style.width = targetPercentage + '%';
    }, 300);
}

/**
 * Update all progress-related elements
 */
function updateProgress() {
    const percentage = calculatePercentage(amountRaised, goalAmount);
    
    // Update amount raised display
    if (amountRaisedElement) {
        amountRaisedElement.textContent = formatCurrency(amountRaised);
    }
    
    // Update date display
    if (updateDateElement) {
        updateDateElement.textContent = updateDate;
    }
    
    // Animate progress bar
    animateProgressBar(percentage);
}

// ============================================
// SMOOTH SCROLL - Gentle navigation
// ============================================

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const header = document.querySelector('.site-header');
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetElement.getBoundingClientRect().top 
                                     + window.pageYOffset 
                                     - headerHeight 
                                     - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// COPY TO CLIPBOARD - Helpful utility
// ============================================

/**
 * Copy UPI ID to clipboard
 */
function copyUPI() {
    const upiId = 'baliyanuttam6-1@oksbi';
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(upiId)
            .then(() => {
                showToast('UPI ID copied');
            })
            .catch(() => {
                fallbackCopy(upiId);
            });
    } else {
        fallbackCopy(upiId);
    }
}

/**
 * Fallback copy method for older browsers
 * @param {string} text - Text to copy
 */
function fallbackCopy(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    tempInput.style.cssText = 'position:absolute;left:-9999px;';
    document.body.appendChild(tempInput);
    
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    
    try {
        document.execCommand('copy');
        showToast('UPI ID copied');
    } catch (err) {
        showToast('Please copy manually');
    }
    
    document.body.removeChild(tempInput);
}

/**
 * Show toast notification
 * @param {string} message - Message to display
 */
function showToast(message) {
    if (!toast) return;
    
    const toastMessage = toast.querySelector('.toast-message');
    if (toastMessage) {
        toastMessage.textContent = message;
    }
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

// ============================================
// SCROLL REVEAL - Subtle entrance animations
// ============================================

/**
 * Initialize scroll-triggered reveal animations
 * Uses IntersectionObserver for performance
 */
function initScrollReveal() {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
    ).matches;
    
    if (prefersReducedMotion) {
        return; // Skip animations if user prefers reduced motion
    }
    
    // Check for IntersectionObserver support
    if (!('IntersectionObserver' in window)) {
        return;
    }
    
    // Add reveal class to sections
    const sections = document.querySelectorAll('section:not(.hero)');
    sections.forEach(section => {
        const content = section.querySelector('.story-content, .updates-content, .progress-content, .support-content, .help-content');
        if (content) {
            content.classList.add('reveal');
        }
    });
    
    // Create observer with gentle threshold
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add small delay for more natural feel
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, 100);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe all reveal elements
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
}

// ============================================
// QR CODE HANDLING - Graceful fallback
// ============================================

/**
 * Handle QR code image loading
 */
function initQRCodeHandler() {
    const qrImage = document.getElementById('qrImage');
    if (!qrImage) return;
    
    qrImage.addEventListener('error', function() {
        // Create a gentle placeholder if image fails
        this.style.display = 'none';
        
        const placeholder = document.createElement('div');
        placeholder.className = 'qr-placeholder';
        placeholder.setAttribute('aria-label', 'QR code placeholder - add qr-code.png file');
        placeholder.innerHTML = `
            <div style="
                width: 180px;
                height: 180px;
                background: var(--bg-subtle, #f5f4f2);
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                border-radius: 8px;
                color: var(--text-muted, #9a9a9a);
                font-size: 14px;
                text-align: center;
                padding: 1rem;
                border: 1px dashed var(--border-light, #e8e7e5);
            ">
                <div style="font-size: 32px; margin-bottom: 8px; opacity: 0.5;">â³</div>
                <div style="font-size: 13px;">Add QR code image</div>
            </div>
        `;
        
        this.parentNode.insertBefore(placeholder, this);
    });
}

// ============================================
// HEADER SCROLL - Subtle shadow
// ============================================

/**
 * Add subtle shadow to header on scroll
 */
function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    
    let lastScrollY = 0;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 20) {
            header.style.boxShadow = '0 2px 12px rgba(60, 60, 60, 0.06)';
        } else {
            header.style.boxShadow = 'none';
        }
        
        lastScrollY = currentScrollY;
    }, { passive: true });
}

// ============================================
// INITIALIZATION
// ============================================

/**
 * Initialize all functionality
 */
function init() {
    // Update progress display
    updateProgress();
    
    // Initialize smooth scrolling
    initSmoothScroll();
    
    // Initialize scroll reveal animations
    initScrollReveal();
    
    // Initialize header scroll effect
    initHeaderScroll();
    
    // Initialize QR code handler
    initQRCodeHandler();
    
    // Log initialization for debugging
    console.log('Support Raunak - Initialized');
    console.log('Amount raised:', formatCurrency(amountRaised));
    console.log('Goal:', formatCurrency(goalAmount));
    console.log('Progress:', calculatePercentage(amountRaised, goalAmount).toFixed(1) + '%');
}

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ============================================
// EXPOSE FUNCTIONS GLOBALLY
// ============================================
window.copyUPI = copyUPI;

// ============================================
// IMAGE GALLERY - Dynamic image loading
// ============================================

/**
 * Image configuration for the gallery
 * Each image has a filename and descriptive alt text for accessibility
 * 
 * To add new images:
 * 1. Add the image file to the assets/ directory
 * 2. Add an entry to this array with the filename and alt text
 */
const galleryImages = [
    {
        filename: 'current_condition.jpeg',
        alt: 'Current medical condition - Raunak receiving care in the hospital',
        caption: 'Current Condition'
    },
    {
        filename: 'QR-code.png',
        alt: 'QR code for UPI payment to support Raunak\'s treatment',
        caption: 'UPI QR Code'
    }
    // Add more images here as needed
    // Example:
    // {
    //     filename: 'family_photo.jpg',
    //     alt: 'Raunak with his family before his diagnosis',
    //     caption: 'Family Photo'
    // }
];

/**
 * Create an image grid item element
 * @param {Object} imageData - Image configuration object
 * @returns {HTMLElement} - Figure element containing the image
 */
function createImageElement(imageData) {
    const figure = document.createElement('figure');
    figure.className = 'image-grid-item';
    figure.setAttribute('role', 'listitem');
    
    const img = document.createElement('img');
    img.src = `./assets/${imageData.filename}`;
    img.alt = imageData.alt;
    img.loading = 'lazy';
    img.decoding = 'async';
    
    // Add loading state
    figure.classList.add('image-loading');
    
    // Handle successful image load
    img.addEventListener('load', function() {
        figure.classList.remove('image-loading');
    });
    
    // Handle image load error
    img.addEventListener('error', function() {
        figure.classList.remove('image-loading');
        figure.classList.add('image-error');
        img.style.display = 'none';
        
        const errorText = document.createElement('span');
        errorText.textContent = `Could not load: ${imageData.filename}`;
        figure.appendChild(errorText);
    });
    
    // Add caption
    const figcaption = document.createElement('figcaption');
    figcaption.textContent = imageData.caption;
    
    figure.appendChild(img);
    figure.appendChild(figcaption);
    
    return figure;
}

/**
 * Initialize the image gallery
 * Loads all configured images into the grid
 */
function initImageGallery() {
    const imageGrid = document.getElementById('imageGrid');
    if (!imageGrid) return;
    
    // Clear any existing content
    imageGrid.innerHTML = '';
    
    // Check if gallery has images configured
    if (galleryImages.length === 0) {
        const emptyMessage = document.createElement('p');
        emptyMessage.className = 'gallery-empty';
        emptyMessage.textContent = 'No images have been added to the gallery yet.';
        emptyMessage.style.textAlign = 'center';
        emptyMessage.style.color = 'var(--text-muted)';
        imageGrid.appendChild(emptyMessage);
        return;
    }
    
    // Create and append image elements
    galleryImages.forEach(imageData => {
        const imageElement = createImageElement(imageData);
        imageGrid.appendChild(imageElement);
    });
    
    console.log(`Image gallery initialized with ${galleryImages.length} images`);
}

// Initialize gallery when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initImageGallery);
} else {
    initImageGallery();
}