
var sections = document.querySelectorAll('.body-container');
var tabs = document.querySelectorAll('.tab');


var observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        const targetTab = document.querySelector(`.tab[data-target="#${entry.target.id}"]`);
        if (entry.isIntersecting) {
            targetTab.classList.add('active');
        } else {
            targetTab.classList.remove('active');
        }
    });
}, { threshold: 0.5 });


sections.forEach(section => {
    observer.observe(section);
});

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetId = tab.getAttribute('data-target');
        const targetElement = document.querySelector(targetId);


        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});