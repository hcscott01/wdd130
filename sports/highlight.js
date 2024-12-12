// Quiz functionality: Shows score when quiz is submitted
document.getElementById('quiz-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    const formData = new FormData(event.target);
    let score = 0;

    // Check the selected answers
    if (formData.get('question1') === 'answer1') score++;
    if (formData.get('question2') === 'answer3') score++;
    if (formData.get('question3') === 'answer2') score++;
    if (formData.get('question4') === 'answer2') score++;
    if (formData.get('question5') === 'answer1') score++;

    // Display score
    const result = document.getElementById('quiz-result');
    result.textContent = `You scored ${score} out of 5`;
});
