// Função para atualizar a contagem regressiva
function updateCountdown() {
    const now = new Date();
    const startDate = new Date('2025-04-07T00:00:00'); // Data inicial
    const intervalMonths = 3; // A cada 3 meses
    let nextDate = new Date(startDate);

    // Calcula a próxima data válida
    while (nextDate <= now) {
      nextDate.setMonth(nextDate.getMonth() + intervalMonths);
    }

    const timeRemaining = nextDate - now;
    const monthsRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 30));
    const daysRemaining = Math.floor((timeRemaining % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hoursRemaining = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
    const formattedTime = `${String(hoursRemaining).padStart(2, '0')}:${String(minutesRemaining).padStart(2, '0')}:${String(secondsRemaining).padStart(2, '0')}`;
    
    document.getElementById("meses").textContent = monthsRemaining;
    document.getElementById("dias").textContent = daysRemaining;
    document.getElementById("horario").textContent = formattedTime;
    document.getElementById("data-final").textContent = nextDate.toLocaleString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' });
    
    // Debug: Log da contagem atualizada
    console.log("Countdown atualizado - Next Date:", nextDate, "Meses:", monthsRemaining, "Dias:", daysRemaining);
  }
  setInterval(updateCountdown, 1000);
  updateCountdown();

  // Controle do modal
  const downloadModal = document.getElementById("downloadModal");
  const downloadButton = document.querySelector(".button-v4");
  const closeModal = document.querySelector(".modal .close");
  const downloadForm = document.getElementById("downloadForm");
  const loadingDiv = document.getElementById("loading");

  downloadButton.addEventListener("click", () => {
    console.log("Botão 'Baixar revista' clicado");
    downloadModal.style.display = "flex";
  });
  closeModal.addEventListener("click", () => {
    console.log("Botão de fechar modal clicado");
    downloadModal.style.display = "none";
  });
  window.addEventListener("click", (event) => {
    if (event.target === downloadModal) {
      console.log("Clique fora do modal - fechando modal");
      downloadModal.style.display = "none";
    }
  });

  // Envio do formulário via EmailJS com loading quase instantâneo
  downloadForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Formulário enviado");

    // Exibe o loading e oculta o formulário para deixar o retorno quase nulo
    downloadForm.style.display = "none";
    loadingDiv.style.display = "block";

    // Coleta dos valores digitados
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    console.log("Valores coletados:", { email, telefone });

    // Parâmetros para o template do EmailJS (os nomes devem combinar com o template, ex: {{user_email}} e {{user_telefone}})
    const templateParams = {
      user_email: email,
      user_telefone: telefone
    };
    console.log("Enviando com os parâmetros:", templateParams);

    emailjs.send('service_270g43i', 'template_ntwq9s3', templateParams)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        // Abre o PDF em uma nova aba e fecha o modal
        window.open("https://drive.google.com/file/d/1eM4bpXji1HQTbV-gtXNxkHVMmW2zU_dS/view?usp=sharing", '_blank');
        downloadModal.style.display = "none";
      }, (error) => {
        console.log("FAILED...", error);
        alert("Erro ao enviar suas informações. Tente novamente.");
        // Em caso de erro, volta a exibir o formulário e oculta o loading
        downloadForm.style.display = "block";
        loadingDiv.style.display = "none";
      });
  });