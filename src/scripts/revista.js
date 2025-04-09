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

// Envio do formulário via EmailJS e redirecionamento imediato para a revista
downloadForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Impede o envio tradicional do formulário
  console.log("Formulário enviado");

  // Opcional: exibe o loading e oculta o formulário
  downloadForm.style.display = "none";
  loadingDiv.style.display = "block";

  // Coleta dos valores dos campos
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  console.log("Valores coletados:", { email, telefone });

  // Parâmetros para o template do EmailJS (confira que os nomes batem com os definidos no template)
  const templateParams = {
    user_email: email,
    user_telefone: telefone
  };
  console.log("Enviando com os parâmetros:", templateParams);

  // Envia os dados via EmailJS (a resposta não bloqueia o redirecionamento)
  emailjs.send('service_270g43i', 'template_ntwq9s3', templateParams)
    .then((response) => {
      console.log("EmailJS SUCCESS!", response.status, response.text);
    }, (error) => {
      console.log("EmailJS FAILED...", error);
    });

  // Força o redirecionamento para a revista na mesma página, independente do resultado do EmailJS
  window.location.href = "https://drive.google.com/file/d/1eM4bpXji1HQTbV-gtXNxkHVMmW2zU_dS/view?usp=sharing";
});
