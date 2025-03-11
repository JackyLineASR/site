document.addEventListener("DOMContentLoaded", function () {
    // Inicializa o Swiper primeiro
    const trajetoriaSwiper = new Swiper("#trajetoria-swiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
        on: {
            slideChangeTransitionStart: function () {
                // Remove a classe de todos os slides antes de adicionar ao novo ativo
                document.querySelectorAll(".swiper-slide.trajetoria-card").forEach(card => {
                    card.classList.remove("animate-border");
                });

                // Adiciona animação apenas ao slide ativo
                trajetoriaSwiper.slides[trajetoriaSwiper.activeIndex].classList.add("animate-border");
            }
        }
    });
});
