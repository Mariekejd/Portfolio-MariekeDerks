console.log("help")

document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '1'; // Ensure the body is visible after the animation

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

});

/* DIY */


const infoBtn = document.querySelector('.openInfo');
const infoText = document.querySelector('.project-info'); 

infoBtn.addEventListener('click', () => {
    infoText.classList.toggle('visible');
    if (infoText.classList.contains('visible')) {
        infoText.style.height = infoText.scrollHeight + 'px';
    } else {
        infoText.style.height = '0';
    }
});

const infoBtn2 = document.querySelector('.openInfo2');
const infoText2 = document.querySelector('.project-info2'); 

infoBtn2.addEventListener('click', () => {
    infoText2.classList.toggle('visible');
    if (infoText2.classList.contains('visible')) {
        infoText2.style.height = infoText2.scrollHeight + 'px';
    } else {
        infoText2.style.height = '0';
    }
});

const infoBtn3 = document.querySelector('.openInfo3');
const infoText3 = document.querySelector('.project-info3'); 

infoBtn3.addEventListener('click', () => {
    infoText3.classList.toggle('visible');
    if (infoText3.classList.contains('visible')) {
        infoText3.style.height = infoText3.scrollHeight + 'px';
    } else {
        infoText3.style.height = '0';
    }
});

const infoBtn4 = document.querySelector('.openInfo4');
const infoText4 = document.querySelector('.project-info4'); 

infoBtn4.addEventListener('click', () => {
    infoText4.classList.toggle('visible');
    if (infoText4.classList.contains('visible')) {
        infoText4.style.height = infoText4.scrollHeight + 'px';
    } else {
        infoText4.style.height = '0';
    }
});






