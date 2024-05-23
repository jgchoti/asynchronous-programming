import { ORIGIN } from '../config.js';

/**
 * Returns an array of pokemon in an evolution chain.
 *
 * @async
 * @param {number} [chainId=1] - The evolution chain's id to fetch.
 * @returns {Promise<object[]>} An array of Pokemon objects with a name and URL.
 *
 * @throws {Error} HTTP error! status: {number}.
 */
export const evolutionChain = async (chainId = 1) => {
    // --- generate and declare your resource's URL ---
    // docs: https://pokeapi.co/docs/v2#evolution-section
    const URL = `${ORIGIN}/evolution-chain/${chainId}`;
    
    // --- fetch the API data (this works!) ---
    const encodedURL = encodeURI(URL);
    const response = await fetch(encodedURL);

    // --- throw an error if the response is not ok (this works!) ---
    if (!response.ok) {
        const message = response.statusText
            ? `${response.status}: ${response.statusText}\n-> ${URL}`
            : `HTTP error! status: ${response.status}\n-> ${URL}`;
        throw new Error(message);
    }

    /* --- parse the data if the response was ok (this works!) ---*/
    const data = await response.json();

    // --- process the fetched data (if necessary) ---
    //  you do not need to use `await` below this comment
    //  you can refactor this to a separate logic function and test it
    ; // tricky one!  you will need to push all the species into an array
    let output =[]
    const species = (data) => {
        if (data) {
        let pokemon = {
            name: data.species.name,
            url: data.species.url,
        }
        output.push(pokemon);
        if (data.evolves_to.length > 0) {
            for (const evolution of data.evolves_to) {
                species(evolution);
            }
    }
        }}
    // --- return the final data ---
    species(data.chain);
    return output
};

evolutionChain(7)
    .then((data) => console.log(7, data))
    .catch((err) => console.log(7, err));


