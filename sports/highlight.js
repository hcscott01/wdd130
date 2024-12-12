
document.getElementById('quiz-form').addEventListener('submit', function (event) {
    event.preventDefault(); 
    const formData = new FormData(event.target);
    let score = 0;

    if (formData.get('question1') === 'answer1') score++;
    if (formData.get('question2') === 'answer3') score++;
    if (formData.get('question3') === 'answer2') score++;
    if (formData.get('question4') === 'answer2') score++;
    if (formData.get('question5') === 'answer1') score++;

    const result = document.getElementById('quiz-result');
    result.textContent = `You scored ${score} out of 5`;
});
