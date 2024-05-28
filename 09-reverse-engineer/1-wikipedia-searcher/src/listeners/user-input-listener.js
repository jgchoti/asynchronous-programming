import { userInputHandler } from '../handlers/user-input-handler.js';

export const userInputListener = (id = '') => {
    document.getElementById(id).addEventListener('click', userInputHandler);
};