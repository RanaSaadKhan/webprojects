document.addEventListener('DOMContentLoaded', function() {
    let currentQuestionIndex = 0;
    let timerInterval;
    let totalSeconds = 0;
    const questions = document.querySelectorAll('.question');

    // Show the first question
    questions[currentQuestionIndex].classList.add('active');

    // Handle 'Next' button click
    document.getElementById('next').addEventListener('click', function() {
        if (currentQuestionIndex < questions.length - 1) {
            questions[currentQuestionIndex].classList.remove('active');
            currentQuestionIndex++;
            questions[currentQuestionIndex].classList.add('active');
            
            // Start timer when moving to the next question
            if (!timerInterval) {
                timerInterval = setInterval(function () {
                    totalSeconds++;
                    updateTimerDisplay(totalSeconds);
                }, 1000);
            }
        }
    });

    // Handle 'Back' button click
    document.getElementById('prev').addEventListener('click', function() {
        if (currentQuestionIndex > 0) {
            questions[currentQuestionIndex].classList.remove('active');
            currentQuestionIndex--;
            questions[currentQuestionIndex].classList.add('active');
        }
    });

    function updateTimerDisplay(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        const minutesFormatted = minutes.toString().padStart(2, '0');
        const secondsFormatted = remainingSeconds.toString().padStart(2, '0');

        document.getElementById('timer').textContent = `${minutesFormatted}:${secondsFormatted}`;
    }
});
