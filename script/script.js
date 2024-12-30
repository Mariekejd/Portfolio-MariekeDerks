console.log("help")

document.getElementById('toggle-carousel').addEventListener('click', function() {
    const carouselContainer = document.getElementById('carousel-container');
    carouselContainer.style.display = carouselContainer.style.display === 'block' ? 'none' : 'block';
  });
  
  let currentIndex = 0;
  
  document.querySelector('.carousel-control.next').addEventListener('click', function() {
    const items = document.querySelectorAll('.carousel-item');
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  });
  
  document.querySelector('.carousel-control.prev').addEventListener('click', function() {
    const items = document.querySelectorAll('.carousel-item');
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
  });
  
  function updateCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    items.forEach((item, index) => {
      item.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
  }

