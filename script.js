document.addEventListener("DOMContentLoaded", function() {
  const counter = document.getElementById('counter');
  const durationRange = document.getElementById('durationRange');
  const durationDisplay = document.getElementById('durationDisplay');
  const minValue = document.getElementById('minValue');
  const maxValue = document.getElementById('maxValue');
  
  const startValue = 0;
  const endValue = 100;

  function updateDisplay() {
    const duration = parseInt(durationRange.value);
    durationDisplay.value = duration;
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

  durationRange.addEventListener('input', updateDisplay);

  updateDisplay(); // Initialize display
});
