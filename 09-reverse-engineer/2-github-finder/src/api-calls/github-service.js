import { ORIGIN } from '../../config.js';

export const gitHubService = async (userName = '') => {
    // console.log(searchTerm)

    const URL = `${ORIGIN}${userName}`

    console.log(URL)

    const encodedURL = encodeURI(URL);
    const response = await fetch(encodedURL);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}\n-> ${URL}`);
    }

    const result = await response.json();
    return result
};
