export const renderError = () => {
    const parentDiv = document.getElementById("profile").parentNode;
    const divEl = document.createElement('div')
    divEl.className = "alert alert-danger"
    divEl.innerText = "User Not Found!"
    parentDiv.appendChild(divEl)
}

