

var sections = document.querySelectorAll('.container1');
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


const accordionItems = document.querySelectorAll('.accordion-item');
const images = document.querySelectorAll('.image-container img');


accordionItems.forEach((item, index) => {
  const header = item.querySelector('.accordion-header');

  header.addEventListener('click', () => {

    accordionItems.forEach((i) => i.classList.remove('active'));
    images.forEach((img) => img.classList.remove('active'));


    item.classList.add('active');
    const currentImage = images[index];
    currentImage.classList.add('active'); 
    currentImage.setAttribute('data-aos', 'slide-left'); 
    AOS.refresh();
  });
});

