const overlay = document.querySelector('.landing-overlay');
const site = document.querySelector('.main-site');
const music = document.getElementById('bg-music');

overlay.addEventListener('click', () => {
    // 1. Fade out the overlay
    overlay.style.opacity = '0';
    
    // 2. Wait for fade, then remove from view
    setTimeout(() => {
        overlay.style.display = 'none';
        // 3. Trigger the site animations
        site.classList.add('active');
    }, 1000);

    // 4. Play the music
    music.play();
});
