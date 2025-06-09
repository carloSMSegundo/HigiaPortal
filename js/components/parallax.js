// Efeito Parallax
document.addEventListener('DOMContentLoaded', () => {
    const heroImage = document.querySelector('.hero__img');
    
    if (heroImage) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            heroImage.style.transform = `translateY(${scrollY * 0.15}px)`;
        });
    }
});