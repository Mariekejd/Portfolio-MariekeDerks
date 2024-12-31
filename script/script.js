console.log("help")

document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '1'; // Ensure the body is visible after the animation

    const toggleButton = document.getElementById('toggle-carousel');
    const carouselContainer = document.getElementById('carousel-container');

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

    const openDialogButtons = document.querySelectorAll('.open-dialog');
    const closeDialogButtons = document.querySelectorAll('.close-dialog');
    const dialogs = document.querySelectorAll('dialog');

    openDialogButtons.forEach(button => {
        button.addEventListener('click', () => {
            const dialogId = button.getAttribute('data-dialog');
            const dialog = document.getElementById(dialogId);
            dialog.showModal();
            document.body.classList.add('dialog-open');
        });
    });

    closeDialogButtons.forEach(button => {
        button.addEventListener('click', () => {
            const dialog = button.closest('dialog');
            dialog.setAttribute('closing', '');
            dialog.addEventListener('animationend', () => {
                dialog.removeAttribute('closing');
                dialog.close();
                document.body.classList.remove('dialog-open');
            }, { once: true });
        });
    });

    dialogs.forEach(dialog => {
        dialog.addEventListener('click', (event) => {
            if (event.target === dialog) {
                dialog.setAttribute('closing', '');
                dialog.addEventListener('animationend', () => {
                    dialog.removeAttribute('closing');
                    dialog.close();
                    document.body.classList.remove('dialog-open');
                }, { once: true });
            }
        });
    });

    // Ensure close button works after dynamically adding event listeners
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('close-dialog')) {
            const dialog = event.target.closest('dialog');
            dialog.setAttribute('closing', '');
            dialog.addEventListener('animationend', () => {
                dialog.removeAttribute('closing');
                dialog.close();
                document.body.classList.remove('dialog-open');
            }, { once: true });
        }
    });
});




