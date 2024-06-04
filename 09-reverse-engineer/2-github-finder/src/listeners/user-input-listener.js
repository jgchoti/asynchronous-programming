import { userInputHandler } from '../handlers/user-input-handler.js';

export const userInputListener = (id = '') => {
    document.getElementById(id).addEventListener('click', userInputHandler);

    const searchInput = document.getElementById('searchUser')
    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            document.getElementById(id).click();
        }
    });
};