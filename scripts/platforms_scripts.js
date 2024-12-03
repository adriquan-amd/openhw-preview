var subtitles = document.querySelectorAll('.subtitle');
var allFlexRows = document.querySelectorAll('.flex-row-bcf');


subtitles.forEach(subtitle => {
    subtitle.addEventListener('click', function() {
        const frame2 = subtitle.closest('.frame-2');
        const flexRowBcf = frame2.querySelector('.flex-row-bcf');
        allFlexRows.forEach(flexRow => {
            flexRow.style.display = 'none';
        });



        if (flexRowBcf.style.display === 'none' || flexRowBcf.style.display === '') {
            flexRowBcf.style.display = 'block';
        } else {
            flexRowBcf.style.display = 'none';
        }

        const imgName = subtitle.getAttribute('data-img');
        dynamicImage.src = `assets/platforms/${imgName}`;
        dynamicImage.alt = `Image for ${subtitle.textContent.trim()}`;
    });
});


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


