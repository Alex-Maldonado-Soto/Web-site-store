// sliders[value-1].classList.toggle(`slider__body--show`);
///////////responsive del navbar

const navBarResponsive = document.querySelector(`nav`);

function navBarToggle() {
    navBarResponsive.classList.toggle(`nav-responsive`);
}

/////////Scroll spy con javascript

const encabezados = document.querySelectorAll(`.section`)
const enlaces = document.querySelectorAll(`nav a`)


const observer = new IntersectionObserver((entradas, observador) => {

    entradas.forEach(entrada => {
        
        if(entrada.isIntersecting) {
            const id = `#` + entrada.target.id;
            history.pushState({}, entrada.target.innetText, id);
        
            enlaces.forEach(enlace => {

                enlace.classList.remove(`active`);

                const href = enlace.attributes.href.nodeValue;

                if(href === id) {
                    enlace.classList.add(`active`);
                }

            });

        }

    });


}, {
    threshold: 1,
    rootMargin: `0px 50px -40% 0px`
});

encabezados.forEach(encabezado =>{
    observer.observe(encabezado);
});
