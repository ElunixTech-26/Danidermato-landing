document.addEventListener('DOMContentLoaded', () =>{
    initScrollReveal();
    carousel();
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
}

