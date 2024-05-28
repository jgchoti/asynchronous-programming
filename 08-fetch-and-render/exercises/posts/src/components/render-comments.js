/**
 * Document me!
 *
 * @param {_} photo
 * @returns
 */
export const renderComments = (comment = {}) => {

    const container = document.createElement('div');
    container.id = 'comment-' + comment.id;
    container.className = 'comment';

    const titleEl = document.createElement('h2');
    titleEl.innerHTML = comment.name;
    container.appendChild(titleEl);

    const userEl = document.createElement('code');
    userEl.innerHTML = 'comment by: ' + comment.email
    container.appendChild(userEl);

    const bodyEl = document.createElement('p');
    bodyEl.innerHTML = comment.body;
    container.appendChild(bodyEl);
    return container
};
