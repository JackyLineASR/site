function updateCountdown() {
    const now = new Date();
    const startDate = new Date('2025-03-15T00:00:00'); // 1º de abril de 2025
    const intervalMonths = 3; // A cada 3 meses
    let nextDate = startDate;

    // Calcular a próxima data de 3 em 3 meses
    while (nextDate <= now) {
        nextDate.setMonth(nextDate.getMonth() + intervalMonths);
    }

    const timeRemaining = nextDate - now;
    
    // Calcular os valores para meses, dias, horas, minutos e segundos
    const monthsRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 30)); // Aproximadamente 30 dias por mês
    const daysRemaining = Math.floor((timeRemaining % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hoursRemaining = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
    // Formatar horário com dois dígitos
    const formattedTime = `${String(hoursRemaining).padStart(2, '0')}:${String(minutesRemaining).padStart(2, '0')}:${String(secondsRemaining).padStart(2, '0')}`;

    // Atualizar os valores na página
    document.querySelector('.revista-meses span').textContent = monthsRemaining;
    document.querySelector('.revista-dias span').textContent = daysRemaining;
    document.querySelector('.revista-horario span').textContent = formattedTime;

    // Atualizar a data final na imagem
    document.querySelector('.revista-image span b').textContent = nextDate.toLocaleString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' });
}

// Atualizar a contagem regressiva a cada segundo
setInterval(updateCountdown, 1000);
updateCountdown(); // Chamar inicialmente para mostrar imediatamente
