document.addEventListener('DOMContentLoaded', async ()=>{

    const components = [...document.querySelectorAll('[data-component]')];

    const loadComponent = async (el) => {
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
        } catch (err){
            console.error(`Erro ao carregar o componente: ${name}`, err);
        }
    };

    await Promise.all(components.map(loadComponent));

    const runAfterLoad = (fn) => {
        const run = () => requestAnimationFrame(() => requestAnimationFrame(fn));
        if (document.readyState === 'complete') {
            run();
        } else {
            window.addEventListener('load', run, { once: true });
        }
    };

    runAfterLoad(() => {
        if (typeof handleMultiEntryService === 'function') {
            handleMultiEntryService();
        }

        if (typeof handleInitialHashScroll === 'function') {
            handleInitialHashScroll();
        }
    });

});
