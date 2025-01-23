document.addEventListener('DOMContentLoaded', () => { 
    const infoButtons = document.querySelectorAll('[class^="openInfo"]');
    const infoTexts = document.querySelectorAll('[class^="project-info"]');

    infoButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const infoText = infoTexts[index];
            if (infoText.classList.contains('visible')) {
                infoText.style.height = '0';
                infoText.addEventListener('transitionend', () => {
                    infoText.style.display = 'none';
                }, { once: true });
            } else {
                infoText.style.display = 'block';
                infoText.style.height = infoText.scrollHeight + 'px';
            }
            infoText.classList.toggle('visible');
        });
    });
});