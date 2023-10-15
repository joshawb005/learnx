const slider = document.querySelector('.slider');
const sections = document.querySelectorAll('.sec-05');
let currentIndex = 0;

function showSection(index) {
  const newPosition = -index * 100 + 'vw';
  slider.style.transform = 'translateX(' + newPosition + ')';
}

function nextSection() {
  if (currentIndex < sections.length - 1) {
    currentIndex++;
    showSection(currentIndex);
  }
}

function prevSection() {
  if (currentIndex > 0) {
    currentIndex--;
    showSection(currentIndex);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  showSection(currentIndex);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      nextSection();
    } else if (event.key === 'ArrowLeft') {
      prevSection();
    }
  });
});
