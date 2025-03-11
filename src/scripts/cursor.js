// const cursor = document.querySelector(".custom-cursor");

// // Atualiza a posição do cursor conforme o movimento do mouse
// document.addEventListener("mousemove", (e) => {
//     cursor.style.left = `${e.clientX}px`;
//     cursor.style.top = `${e.clientY}px`;

//     createTrail(e.clientX, e.clientY); // Chama a função para criar trilha
// });

// // Adiciona o efeito ao clicar
// document.addEventListener("mousedown", () => {
//     cursor.classList.add("active");
// });

// // Remove o efeito após soltar o clique
// document.addEventListener("mouseup", () => {
//     cursor.classList.remove("active");
// });

// // Cria a trilha luminosa
// function createTrail(x, y) {
//     const trail = document.createElement("div");
//     trail.classList.add("trail");
//     document.body.appendChild(trail);

//     trail.style.left = `${x}px`;
//     trail.style.top = `${y}px`;

//     setTimeout(() => {
//         trail.remove(); // Remove o rastro após a animação
//     },500);
// }
