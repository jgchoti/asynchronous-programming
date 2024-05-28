export const renderSpacing = (number, container) => {
    for (let i = 0; i < number; i++) {
        const brEl = document.createElement('br');
        container.appendChild(brEl);
    }
    return container;
}