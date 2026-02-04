// Função imediata para não poluir o escopo global
(() => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const header = document.querySelector('.header');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu li'); 

    // Lógica do Menu Hambúrguer
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation(); 
            mobileMenu.classList.toggle('active');

            menuToggle.classList.toggle('active'); // ativa animação do X
            
            const isExpanded = mobileMenu.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Fechar menu ao clicar em um link
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            menuToggle.classList.remove('active'); // O ícone volta a ser hamburguer
        });
    });

    // Efeito de Scroll no Header, ficar menor ao scrollar para baixo
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) { 
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
})();