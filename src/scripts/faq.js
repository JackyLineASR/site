document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll(".footer-question");

    questions.forEach((question) => {
        const questionText = question.querySelector(".footer-question-text");
        const answer = question.querySelector(".footer-question-open");
        const icon = question.querySelector(".footer-question-text i");

        questionText.addEventListener("click", () => {
            // Fecha todas as respostas abertas antes de abrir a nova
            questions.forEach((q) => {
                const answerOpen = q.querySelector(".footer-question-open");
                const iconOpen = q.querySelector(".footer-question-text i");
                if (answerOpen !== answer) {
                    answerOpen.style.maxHeight = null;
                    answerOpen.style.opacity = 0;
                    setTimeout(() => {
                        answerOpen.style.display = "none";
                    }, 300);
                    // Restaura a rotação da seta
                    iconOpen.style.transform = "rotate(0deg)";
                }
            });

            // Alterna a resposta atual
            if (answer.style.display === "block") {
                answer.style.maxHeight = null;
                answer.style.opacity = 0;
                setTimeout(() => {
                    answer.style.display = "none";
                }, 300);
                // Restaura a rotação da seta
                icon.style.transform = "rotate(0deg)";
            } else {
                answer.style.display = "block";
                setTimeout(() => {
                    answer.style.maxHeight = answer.scrollHeight + "px";
                    answer.style.opacity = 1;
                }, 10);
                // Gira a seta para baixo
                icon.style.transform = "rotate(90deg)";
            }
        });
    });
});
