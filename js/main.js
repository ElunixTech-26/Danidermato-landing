document.addEventListener('DOMContentLoaded', () =>{
    initScrollReveal();
    carousel();
    // handleMultiEntryService();
    window.addEventListener('hashchange', handleInitialHashScroll);
});

// animação dos elementos aparecendo na página.
function initScrollReveal(){
    const observerOptions = {
        root: null, // fica em relação ao Viewport
        rootMargin: '0px',
        threshold: 0.15 // 15% do elemento visivel
    };

    const oberver = new IntersectionObserver((entries, observer) =>{
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => oberver.observe(el))
}

function carousel(){

    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.nav-arrow');

        if (!btn) return;

        const wrapper = btn.closest('.testimonials-wrapper, .services-wrapper');
        
        if (!wrapper) return;
        
        const track = wrapper.querySelector('.testimonials-track, .services-track');
        
        if (!track) return;
        
        const card = track.children[0];
        if (!card) return;
        
        const scrollAmount = card.offsetWidth + 32; 
        
        if (btn.classList.contains('next')) {
            track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        } else {
            track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    });
};

function handleMultiEntryService(){

    const params = new URLSearchParams(window.location.search);

    const service = params.get('tratamentos');

    if(!service) return;

    const serviceSection = document.querySelector('#tratamentos');
    const track = document.querySelector('.services-track');
    const targetCard = track?.querySelector(`[data-service="${service}"`);

    if(!serviceSection || !track || !targetCard) return;

    serviceSection.scrollIntoView({
        behavior: 'smooth',
        block: "center"
    });
    

    setTimeout(() =>{

        const cardWidth = targetCard.offsetWidth + 32;
        const cardIndex = [...track.children].indexOf(targetCard);

        track.scrollTo({
            left: cardWidth * cardIndex,
            behavior: 'smooth'
        });

        targetCard.classList.add('active-service');
    }, 500);

}

function handleInitialHashScroll(){
    const hash = window.location.hash;
    if(!hash) return;

    const target = document.querySelector(hash);
    if(!target) return;

    target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}
