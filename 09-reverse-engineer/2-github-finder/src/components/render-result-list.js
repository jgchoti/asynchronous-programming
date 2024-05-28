export const renderResultList = (response = {}, container) => {
    let list = {
        "Company:": response.company,
        "Website/Blog:": response.blog,
        "Location:": response.location,
        "Account Created:": response.created_at
    }

    const ulEl = document.createElement('ul')
    ulEl.className = "list-group"
    for (const key in list) {
        if (list[key] !== null) {
            const liEl = document.createElement('li')
            liEl.className = "list-group-item"
            liEl.innerText = `${key} ${list[key]}`
            ulEl.appendChild(liEl)
        }
    }
    container.appendChild(ulEl)
    return container
}
