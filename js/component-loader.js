document.addEventListener('DOMContentLoaded', ()=>{

    const components = document.querySelectorAll('[data-component]');

    components.forEach(async (el) => {

        const name = el.dataset.component;

        try{
            const html = await fetch(`/components/${name}/${name}.html`);
            el.innerHTML = await html.text();

            // Inicializa a animação de scroll reveal após carregar o componente
            if (typeof initScrollReveal === 'function') {
                initScrollReveal(); 
            }

            const css = document.createElement("link");
            css.rel = "stylesheet";
            css.href = `/components/${name}/${name}.css`;
            document.head.appendChild(css);

            // Componentes que terão Js, colocar data-has-js="true" no elemento
            if (el.dataset.hasJs === "true") {
                const js = document.createElement('script');
                js.src = `/components/${name}/${name}.js`;
                js.defer = true;
                document.body.appendChild(js);
            }

            if(el.dataset.component == 'footer'){
                handleMultiEntryService();
            }

        } catch (err){
            console.error(`Erro ao carregar o componente: ${name}`, err);
        }
    });

});