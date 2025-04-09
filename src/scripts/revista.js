// Seleciona os elementos do modal e do formulário
const downloadModal = document.getElementById("downloadModal");
const downloadButton = document.querySelector(".button-v4");
const closeModal = document.querySelector(".modal .close");
const downloadForm = document.getElementById("downloadForm");
const loadingDiv = document.getElementById("loading");

// Abre o modal ao clicar no botão "Baixar revista" na seção principal
downloadButton.addEventListener("click", () => {
  console.log("Botão 'Baixar revista' clicado - abrindo modal");
  downloadModal.style.display = "flex";
});

// Fecha o modal ao clicar no botão de fechar (X)
closeModal.addEventListener("click", () => {
  console.log("Botão de fechar modal clicado");
  downloadModal.style.display = "none";
});

// Fecha o modal ao clicar fora dele
window.addEventListener("click", (event) => {
  if (event.target === downloadModal) {
    console.log("Clique fora do modal - fechando modal");
    downloadModal.style.display = "none";
  }
});

// Envio do formulário via EmailJS, mantendo a função de envio
downloadForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Impede o comportamento padrão do formulário
  console.log("Formulário enviado");

  // Exibe o loading e oculta o formulário para sinalizar que o envio está ocorrendo
  downloadForm.style.display = "none";
  loadingDiv.style.display = "block";

  // Coleta dos valores dos campos (mesmo que a validação não seja obrigatória para redirecionar)
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  console.log("Valores coletados:", { email, telefone });

  // Parâmetros para o template do EmailJS (os nomes devem combinar com os definidos no template, por exemplo: {{user_email}}, {{user_telefone}})
  const templateParams = {
    user_email: email,
    user_telefone: telefone
  };
  console.log("Enviando com os parâmetros:", templateParams);

  emailjs.send('service_270g43i', 'template_ntwq9s3', templateParams)
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      // Abre o PDF da revista em uma nova aba e fecha o modal
      window.open("https://drive.google.com/file/d/1eM4bpXji1HQTbV-gtXNxkHVMmW2zU_dS/view?usp=sharing", '_blank');
      downloadModal.style.display = "none";
    }, (error) => {
      console.log("FAILED...", error);
      alert("Erro ao enviar suas informações. Tente novamente.");
      // Em caso de erro, reexibe o formulário e oculta o loading
      downloadForm.style.display = "block";
      loadingDiv.style.display = "none";
    });
});
