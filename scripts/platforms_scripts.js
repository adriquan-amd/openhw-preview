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
    });
});
