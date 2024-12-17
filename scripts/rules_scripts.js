var sections = document.querySelectorAll('.mb-5');
var tabs = document.querySelectorAll('.tab');

window.addEventListener('scroll', () => {
    let windowHeight = window.innerHeight;
    let windowMiddle = windowHeight / 2;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect(); 

    
        if (rect.top < windowMiddle && rect.bottom > windowMiddle) {
            const targetTab = document.querySelector(`.tab[data-target="#${section.id}"]`);


            tabs.forEach(tab => tab.classList.remove('active'));


            targetTab.classList.add('active');
        }
    });
});

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetId = tab.getAttribute('data-target');
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center' 
        });
    });
});