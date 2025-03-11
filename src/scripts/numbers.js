document.addEventListener('DOMContentLoaded', function () {
    const options = {
        root: null, // Observa a visibilidade dentro da janela de visualização
        threshold: 0.5, // Quando 50% do elemento está visível, o callback é acionado
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ação quando a seção aparece na tela
                animateNumbers(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // Seleciona todas as seções de números
    const numbersSection = document.querySelectorAll('.sobre-info');

    numbersSection.forEach(section => {
        observer.observe(section);
    });

    function animateNumbers(section) {
        const numberElement = section.querySelector('span');
        const number = parseInt(numberElement.innerText.replace(/[^\d]/g, ''), 10);
        const bar = section.querySelector('.sobre-bar');

        // Duração de 4 segundos para ambos (número e barra)
        const duration = 4;

        // Define a transição para a barra
        bar.style.transition = `width ${duration}s ease-out`; 
        bar.style.width = '0%'; // Começa com a barra em 0%

        // Inicia a animação da barra com um pequeno atraso
        setTimeout(() => {
            bar.style.width = '100%'; // A barra alcança 100%
        }, 100);

        // Anima o número
        let currentNumber = 0;
        const increment = Math.ceil(number / (duration * 50)); // Calcula o incremento por 50 partes (aproximadamente por segundo)
        const numberInterval = setInterval(function () {
            currentNumber += increment;
            if (currentNumber >= number) {
                currentNumber = number;
                clearInterval(numberInterval);
            }
            numberElement.innerText = `${currentNumber}${numberElement.innerText.replace(/[0-9]/g, '')}`;
        }, 1000 / 50); // Atualiza o número a cada 20ms (aproximadamente 50 vezes por segundo)

        // Adiciona a classe para animar a transição do número
        numberElement.classList.add('active');
    }
});
