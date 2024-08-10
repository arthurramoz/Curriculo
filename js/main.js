let scroll1 = 0;
let scroll2 = 0;
const scrollStart = 7;
const menu = document.getElementById('menu');

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > scroll1) {
        menu.style.top = "-600px";
        scroll2 = 0;
    } else {
        scroll2++;
        if (scroll2 >= scrollStart) {
            menu.style.top = "0";
        }
    }

    if (currentScroll <= 0) {
        menu.style.top = "0";
        scroll2 = 0;
    }

    scroll1 = currentScroll <= 0 ? 0 : currentScroll;
});

document.addEventListener('DOMContentLoaded', function() {
    const div = document.querySelector('.edit1');

    div.addEventListener('click', function(){

        const scrollTempo = 500;
        const scrollFim = 80;
        const tempoIniciar = performance.now();

        function smoothScroll(currentTime){

            const tempoSmooth = currentTime - tempoIniciar;
            const progresso = Math.min(tempoSmooth / scrollTempo, 1);
            const distancia = progresso * scrollFim;

            window.scrollTo(0, distancia);

            if (progresso < 1) {
                requestAnimationFrame(smoothScroll);
            }
        }

        requestAnimationFrame(smoothScroll);
    });
});