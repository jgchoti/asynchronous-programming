/**
 * Document me!
 *
 * @param {_} photo
 * @returns
 */
export const renderResultPhoto = (response = {}, container) => {
    const imgEl = document.createElement('img')
    imgEl.className = "img-fluid mb-2"
    imgEl.src = response.avatar_url

    container.appendChild(imgEl)
    return container
};
