document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const teethContainers = document.querySelectorAll('.teeth-container');
    const zipperPull = document.querySelector('.zipper-pull');

    // Ensure body loading class is added before any animations
    document.body.classList.add('loading');

    // Generate zipper teeth with enhanced staggering
    function generateTeeth() {
        const teethCount = Math.floor(window.innerHeight / 8);

        teethContainers.forEach(container => {
            // Clear existing teeth first
            container.innerHTML = '';

            for (let i = 0; i < teethCount; i++) {
                const tooth = document.createElement('div');
                tooth.className = 'tooth';
                tooth.style.top = `${i * 8}px`;
                // Enhanced staggered animation
                tooth.style.transitionDelay = `${i * 0.015}s`;
                container.appendChild(tooth);
            }
        });
    }

    // Initialize teeth
    generateTeeth();

    // Debounced window resize handler
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(generateTeeth, 250);
    });

    // Enhanced interactive cloth effect with simple horizontal separation
    let isAnimating = false;
    let lastMouseX = 0;
    let lastMouseY = 0;
    let velocityX = 0;
    let velocityY = 0;
    let separationAmount = 0; // Track the current separation

    // Optional: Add a safety check for required elements
    if (!loader || !zipperPull) {
        console.error('Required loader or zipper pull elements are missing');
        return;
    }

    document.addEventListener('mousemove', (e) => {
        // Prevent animations if loader is in unzipping state
        if (loader.classList.contains('unzipping') || isAnimating) return;

        const deltaX = e.clientX - lastMouseX;
        const deltaY = e.clientY - lastMouseY;

        // Enhanced velocity calculation
        velocityX = velocityX * 0.9 + deltaX * 0.1;
        velocityY = velocityY * 0.9 + deltaY * 0.1;

        // Calculate separation based on mouse position relative to center
        const centerX = window.innerWidth / 2;
        const distanceFromCenter = Math.abs(e.clientX - centerX);
        const maxSeparation = 150; // Maximum separation in pixels

        // Smooth separation transition
        const targetSeparation = (distanceFromCenter / centerX) * maxSeparation;
        separationAmount = separationAmount * 0.8 + targetSeparation * 0.2;

        const clothPanels = document.querySelectorAll('.cloth-panel');
        clothPanels.forEach(panel => {
            // Simple horizontal movement based on panel side
            if (panel.classList.contains('left')) {
                panel.style.transform = `translateX(${-separationAmount}px)`;
            } else {
                panel.style.transform = `translateX(${separationAmount}px)`;
            }
        });

        // Simple zipper pull movement
        const pullMovement = (velocityX * 0.1);
        zipperPull.style.transform = `translateX(${pullMovement}px)`;

        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
    });

    // Rest of the animation sequence remains the same
    function startAnimation() {
        if (!loader) {
            console.error('Loader element not found');
            return;
        }

        setTimeout(() => {
            loader.classList.add('unzipping');
        }, 800);

        setTimeout(() => {
            loader.classList.add('hiding-zipper');
        }, 3000);

        setTimeout(() => {
            loader.classList.add('logo-reveal');
        }, 3500);

        setTimeout(() => {
            document.body.classList.remove('loading');
            document.body.classList.add('loaded');

            if (loader) {
                loader.style.opacity = '0';
                loader.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)';

                setTimeout(() => {
                    loader.style.display = 'none';
                }, 800);
            }
        }, 4500);
    }

    setTimeout(startAnimation, 500);
});