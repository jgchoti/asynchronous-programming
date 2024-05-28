import { renderComments } from './render-comments.js';

/**
 * Document me!
 *
 * @returns
 */
export const renderPost = (post = {}, comments = []) => {
    const container = document.createElement('div');
    container.id = `post-${post.id}`;

    const titleEl = document.createElement('h1');
    titleEl.innerHTML = post.title;
    container.appendChild(titleEl);

    const userEl = document.createElement('code');
    userEl.innerHTML = 'posted by user: ' + post.userId;
    container.appendChild(userEl);

    const bodyEl = document.createElement('p');
    bodyEl.innerHTML = post.body;
    container.appendChild(bodyEl);

    const commentsContainer = document.createElement('div')
    commentsContainer.id = 'comments'
    container.appendChild(commentsContainer);
    comments.forEach(comment => {
        const renderedComment = renderComments(comment)
        commentsContainer.appendChild(renderedComment)
    })


    // const renderedComments = comments.map(renderComments).reduce((all, next) => {
    //     all.appendChild(next);
    //     return all;
    // }, commentContainer);


    return container;
};
