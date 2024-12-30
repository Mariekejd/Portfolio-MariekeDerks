console.log("help")

document.addEventListener('DOMContentLoaded', () => {
  const dropdownButton = document.getElementById('dropdownButton');
  const dropdownContent = document.getElementById('dropdownContent');
  const carousel = document.getElementById('carousel');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  let currentIndex = 0;

  dropdownButton.addEventListener('click', () => {
    dropdownContent.classList.toggle('show');
  });

  document.addEventListener('click', (event) => {
    if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
      dropdownContent.classList.remove('show');
    }
  });

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : carousel.children.length - 1;
    updateCarousel();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < carousel.children.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
  });

  function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  }
});

