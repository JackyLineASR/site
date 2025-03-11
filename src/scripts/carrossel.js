var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    autoplay: {
        delay: 4000, // Tempo entre cada slide (em milissegundos)
        disableOnInteraction: false, // Continua rodando mesmo após interação do usuário
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const afterImageWrapper = document.querySelector(".after-image-wrapper");
    const sliderLine = document.querySelector(".slider-line");

    slider.addEventListener("input", function () {
        afterImageWrapper.style.width = `${slider.value}%`;
        sliderLine.style.left = `${slider.value}%`;
    });
});