// Seleciona os elementos do modal e do formulário
const downloadModal = document.getElementById("downloadModal");
const downloadButton = document.querySelector(".button-v4");
const closeModal = document.querySelector(".modal .close");
const downloadForm = document.getElementById("downloadForm");
const loadingDiv = document.getElementById("loading");

// Função para reiniciar o modal (exibe o formulário, oculta o loading e limpa os campos)
function resetModal() {
  downloadForm.style.display = "block";
  loadingDiv.style.display = "none";
  downloadForm.reset();
}

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

// Envio do formulário via EmailJS e redirecionamento com delay de 2 segundos
downloadForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Impede o comportamento padrão do formulário
  console.log("Formulário enviado");

  // Exibe o loading e oculta o formulário enquanto o envio ocorre
  downloadForm.style.display = "none";
  loadingDiv.style.display = "block";

  // Coleta os valores dos campos
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  console.log("Valores coletados:", { email, telefone });

  // Parâmetros para o template do EmailJS (os nomes devem coincidir com os definidos no template)
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

  // Após 2 segundos, fecha o modal, reinicia seu estado e redireciona para a revista
  setTimeout(() => {
    downloadModal.style.display = "none";
    resetModal();
    window.location.href = "https://drive.google.com/file/d/1D7qjbRvl3Q31g73dUOafeJDJ59ZSTEyB/view?usp=sharing";
  }, 2000);
});
