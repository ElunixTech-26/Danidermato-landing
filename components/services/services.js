(() => {
    const track = document.querySelector('.services-track');
    const btnPrev = document.querySelector('.nav-arrow.prev');
    const btnNext = document.querySelector('.nav-arrow.next');

    if (track && btnNext) {
        btnNext.addEventListener('click', () => {
            track.scrollBy({ left: 300, behavior: 'smooth' });
        });
    }

    if (track && btnPrev) {
        btnPrev.addEventListener('click', () => {
            track.scrollBy({ left: -300, behavior: 'smooth' });
        });
    }
})();