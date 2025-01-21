document.addEventListener('DOMContentLoaded', () => { 

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

})