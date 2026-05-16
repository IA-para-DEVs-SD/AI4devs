document.addEventListener('DOMContentLoaded', function() {
  const quizzes = document.querySelectorAll('.quiz-container');
  let totalQuestions = quizzes.length;
  let answered = 0;
  let correct = 0;

  quizzes.forEach(function(quiz) {
    const options = quiz.querySelectorAll('.quiz-options li');
    const feedback = quiz.querySelector('.quiz-feedback');
    const correctAnswer = quiz.dataset.answer;

    options.forEach(function(option) {
      option.addEventListener('click', function() {
        if (option.classList.contains('disabled')) return;

        answered++;
        options.forEach(function(o) { o.classList.add('disabled'); });

        if (option.dataset.option === correctAnswer) {
          option.classList.add('correct');
          correct++;
          if (feedback) {
            feedback.textContent = '🎉 Correto! ' + (feedback.dataset.explanation || '');
            feedback.classList.add('show', 'success');
          }
        } else {
          option.classList.add('wrong');
          // Highlight correct one
          options.forEach(function(o) {
            if (o.dataset.option === correctAnswer) o.classList.add('correct');
          });
          if (feedback) {
            feedback.textContent = '❌ Incorreto. ' + (feedback.dataset.explanation || '');
            feedback.classList.add('show', 'error');
          }
        }

        updateProgress();
      });
    });
  });

  function updateProgress() {
    const bar = document.querySelector('.quiz-progress-bar');
    if (bar) {
      bar.style.width = (answered / totalQuestions * 100) + '%';
    }
    const scoreEl = document.querySelector('.score-number');
    if (scoreEl && answered === totalQuestions) {
      const pct = Math.round(correct / totalQuestions * 100);
      scoreEl.textContent = correct + '/' + totalQuestions + ' (' + pct + '%)';
      document.querySelector('.quiz-score').style.display = 'block';
    }
  }
});
