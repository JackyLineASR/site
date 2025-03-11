document.querySelectorAll('.projetos-card').forEach(card => {
    card.addEventListener('click', () => {
        // Fecha todos os cards antes de abrir um novo
        document.querySelectorAll('.projetos-card').forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.remove('open');
                const carrossel = otherCard.querySelector('.projetos-card-carrossel');
                if (carrossel) {
                    carrossel.style.height = '0'; // Reseta a altura do carrossel de outros cards
                    carrossel.style.opacity = '0'; // Reseta a opacidade
                    carrossel.style.visibility = 'hidden'; // Torna invisível
                }
            }
        });

        // Alterna a classe 'open' para abrir/fechar
        card.classList.toggle('open');
        const carrossel = card.querySelector('.projetos-card-carrossel');
        
        // Alterna a visibilidade e altura do carrossel
        if (carrossel) {
            if (card.classList.contains('open')) {
                carrossel.style.height = '500px'; // Define a altura quando o carrossel é aberto
                carrossel.style.opacity = '1'; // Torna o carrossel visível
                carrossel.style.visibility = 'visible'; // Torna visível ao abrir
            } else {
                carrossel.style.height = '0'; // Reseta a altura
                carrossel.style.opacity = '0'; // Torna invisível
                carrossel.style.visibility = 'hidden'; // Torna invisível ao fechar
            }
        }
    });
});

