document.addEventListener('DOMContentLoaded', () => { 
    const infoButtons = document.querySelectorAll('[class^="openInfo"]');
    const infoTexts = document.querySelectorAll('[class^="project-info"]');

    infoButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const infoText = infoTexts[index];
            infoText.classList.toggle('visible');
            if (infoText.classList.contains('visible')) {
                infoText.style.height = infoText.scrollHeight + 'px';
            } else {
                infoText.style.height = '0';
            }
        });
    });

    infoTexts.forEach(infoText => {
        infoText.addEventListener('transitionend', () => {
            if (!infoText.classList.contains('visible')) {
                infoText.style.display = 'none';
            } else {
                infoText.style.display = 'block';
            }
        });
    });
});