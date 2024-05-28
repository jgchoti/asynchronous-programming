/**
 * Document me!
 *
 * @param {_} photo
 * @returns
 */
export const renderResultText = (response = {}, textDivEl) => {

    const headerEl = document.createElement('h3');
    headerEl.innerText = response.name !== null ? response.name : response.login
    textDivEl.appendChild(headerEl)

    if (response.bio !== null) {
        const bioEl = document.createElement('small')
        bioEl.innerText = response.bio
        textDivEl.appendChild(bioEl)
    }

    return textDivEl

};



