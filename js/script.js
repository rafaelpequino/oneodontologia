// Selecionar todas as perguntas e respostas
const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');

let openAnswer = null;

// Adicionar um ouvinte de evento a cada pergunta
questions.forEach(question => {
    question.addEventListener('click', () => {
        // Encontrar o elemento de resposta correspondente
        const answerId = question.id.replace('question', 'answer');
        const answer = document.getElementById(answerId);

        // Fechar a resposta aberta anteriormente, se houver
        if (openAnswer && openAnswer !== answer) {
            openAnswer.style.maxHeight = null;
            openAnswer.classList.remove('open');
        }

        // Alternar a exibição da resposta atual
        if (answer.classList.contains('open')) {
            answer.style.maxHeight = null;
            answer.classList.remove('open');
            openAnswer = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + 40 + 'px';
            answer.classList.add('open');
            openAnswer = answer;
        }
    });
});
