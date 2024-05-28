/**
 * Document me!
 *
 * @param {_} photo
 * @returns
 */
export const renderResultButton = (response = {}, container) => {
    const aEl = document.createElement('a')
    aEl.href = response.html_url
    aEl.target = "blank"
    aEl.className = "btn btn-primary btn-block mb-4"
    aEl.innerText = "View Profile"

    container.appendChild(aEl)
    return container
};
