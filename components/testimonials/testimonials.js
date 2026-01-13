(() => {
    const track = document.querySelector('.testimonials-track');
    const btnPrev = document.querySelector('.nav-arrow.prev');
    const btnNext = document.querySelector('.nav-arrow.next');

    if (!track || !btnPrev || !btnNext) return;

    // Tamanho do scroll = largura do card + o gap
    const getScrollAmount = () => {
        const card = track.querySelector('.testimonial-card');
        const gap = 32; 
        return card.offsetWidth + gap;
    };

    btnNext.addEventListener('click', () => {
        track.scrollBy({
            left: getScrollAmount(),
            behavior: 'smooth'
        });
    });

    btnPrev.addEventListener('click', () => {
        track.scrollBy({
            left: -getScrollAmount(), // Negativo para voltar
            behavior: 'smooth'
        });
    });

})();