document.addEventListener('DOMContentLoaded', () =>{
     initScrollReveal();
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