import { apiService } from '../api-calls/api-service.js';
import { state } from '../data/state.js';
import { renderPost } from '../components/render-post.js';
export const userInputHandler = async (event) => {
    const rootEl = document.getElementById('root')
    const postId = event.target.form.postId.value;
    // console.log(postId);

    try {
        const postPromise = apiService('posts', postId);
        const commentsPromise = apiService('posts', postId, 'comments');

        const [post, comments] = await Promise.all([
            postPromise,
            commentsPromise,
        ]);

        state.post = post;
        state.comments = comments;
        console.log(state);

        const postElement = renderPost(post, comments);

        rootEl.appendChild(postElement);
    } catch (err) {
        console.error(err);
    }
};