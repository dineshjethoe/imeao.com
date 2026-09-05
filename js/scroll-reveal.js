const revealSections = document.querySelectorAll('.reveal-section');

if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealSections.forEach((section) => revealObserver.observe(section));
} else {
    revealSections.forEach((section) => section.classList.add('is-visible'));
}
