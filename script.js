document.addEventListener("DOMContentLoaded", function() {
  const counter = document.getElementById('counter');
  const durationRange = document.getElementById('durationRange');
  const startValueInput = document.getElementById('startValue');
  const endValueInput = document.getElementById('endValue');
  const maxValue = document.getElementById('maxValue');
  const updateButton = document.getElementById('updateButton');

  function updateDurationDisplay() {
    const duration = parseInt(durationRange.value);
    maxValue.textContent = duration;
  }

  function updateDisplay() {
    const startValue = parseInt(startValueInput.value) || 0;
    const endValue = parseInt(endValueInput.value) || 100;
    const duration = parseInt(durationRange.value);

    animateCounter(startValue, endValue, duration);
  }

  function animateCounter(start, end, duration) {
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const progress = currentTime - startTime;
      const currentNumber = Math.min(Math.floor((progress / duration) * (end - start) + start), end);
      counter.textContent = currentNumber;

      if (progress < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }

  durationRange.addEventListener('input', updateDurationDisplay);
  updateButton.addEventListener('click', updateDisplay);

  // Inicializa o valor do maxValue ao carregar a página
  updateDurationDisplay();
});
