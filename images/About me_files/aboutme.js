document.addEventListener('DOMContentLoaded', () => { 

    const toggleButton = document.getElementById('toggle-carousel');
    const carouselContainer = document.getElementById('carousel-container');

    if (toggleButton && carouselContainer) {
        toggleButton.addEventListener('click', () => {
            if (carouselContainer.classList.contains('active')) {
                carouselContainer.classList.remove('active');
                setTimeout(() => {
                    carouselContainer.classList.remove('dropdown');
                    carouselContainer.style.display = 'none';
                }, 500); // Match this duration with the CSS transition
            } else {
                carouselContainer.style.display = 'block';
                setTimeout(() => {
                    carouselContainer.classList.add('dropdown');
                    setTimeout(() => {
                        carouselContainer.classList.add('active');
                    }, 10); // Slight delay to trigger the transition
                }, 10); // Slight delay to ensure display is set before adding class
            }
            toggleButton.classList.toggle('active');
        });

        carouselContainer.addEventListener('transitionend', (event) => {
            if (event.propertyName === 'opacity' && !carouselContainer.classList.contains('active')) {
                carouselContainer.style.display = 'none';
            }
        });
    } else {
        console.log('Toggle button or carousel container not found');
    }

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

})