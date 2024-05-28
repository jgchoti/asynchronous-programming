// import { WIKI_URL } from '../../config.js'
// import { renderError } from './render-error.js';
// import { renderResultButton } from './render-result-button.js';
// import { renderResultHeader } from './render-result-header.js';
import { renderResultText } from './render-result-text.js';
import { renderResultPhoto } from "./render-result-photo.js"
import { renderResultButton } from './render-result-button.js';
import { renderResultBadge } from './render-result-badge.js';
import { renderSpacing } from './render-spacing.js';
import { renderResultList } from './render-result-list.js';

/**
 * Document me!
 *
 * @returns
 */
export const renderResult = (response = {}) => {
    const profileOutput = document.getElementById('profile')
    const profileContainer = document.createElement('div')
    profileContainer.className = 'card card-body mb-3'
    const rowDivEl = document.createElement('div')
    rowDivEl.className = "row"

    //photo and button container
    const photoDivEl = document.createElement('div')
    photoDivEl.className = "col-md-3"
    rowDivEl.appendChild(photoDivEl)

    //text container
    const textDivEl = document.createElement('div')
    textDivEl.className = "col-md-9"
    rowDivEl.appendChild(textDivEl)

    //profile photo
    renderResultPhoto(response, photoDivEl)

    //button
    renderResultButton(response, photoDivEl)

    // name and bio
    renderResultText(response, textDivEl)

    //spacing
    renderSpacing(2, textDivEl)

    // badges
    renderResultBadge(response, textDivEl)

    //spacing
    renderSpacing(2, textDivEl)

    //list
    renderResultList(response, textDivEl)

    profileContainer.appendChild(rowDivEl)
    profileOutput.appendChild(profileContainer)

}