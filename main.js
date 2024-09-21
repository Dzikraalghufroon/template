const sections = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.8;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
