import { wikiService } from '../api-calls/wiki-service.js';
import { renderResult } from '../components/render-result.js';
import { renderError } from '../components/render-error.js';

export const userInputHandler = async (event) => {
    const output = document.getElementById('output')
    output.innerHTML = ''
    const userInput = event.target.parentNode.children[0].value;
    // console.log(userInput)
    try {
        const response = await wikiService(userInput);
        // console.log(response)
        renderResult(response.query.search)
    } catch (err) {
        if (userInput === '') {
            renderError('Input field empty!')
        }
        else {
            console.error(err);
            renderError(`An error occurred: ${err.message}`);
        }
    }
};