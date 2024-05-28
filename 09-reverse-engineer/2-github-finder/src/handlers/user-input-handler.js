import { gitHubService } from '../api-calls/github-service.js';
import { renderResult } from '../components/render-result.js';
import { renderError } from '../components/render-error.js';

export const userInputHandler = async () => {
    const inputEl = document.querySelector('input')
    const userInput = inputEl.value;
    const output = document.getElementById('profile')
    output.innerHTML = ""

    // Clear any previous error messages
    const parentDiv = output.parentNode;
    const previousError = parentDiv.querySelector('.alert.alert-danger');
    if (previousError) {
        previousError.remove();
    }

    try {
        const response = await gitHubService(userInput);
        renderResult(response)
    } catch (err) {
        console.error(err);
        renderError();
    }
};