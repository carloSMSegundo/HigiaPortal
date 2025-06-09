// Menu Mobile
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Link ativo ao rolar
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav__link[href*=${sectionId}]`).classList.add('active');
        } else {
            document.querySelector(`.nav__link[href*=${sectionId}]`).classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollActive);

// Animação ao rolar
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = `fadeUp 0.6s ${entry.target.dataset.delay || '0s'} forwards`;
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.animate').forEach((el) => {
    observer.observe(el);
});

// Fechar menu ao clicar em link
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});