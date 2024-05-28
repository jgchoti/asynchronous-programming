/**
 * Document me!
 *
 * @param {_} photo
 * @returns
 */
export const renderResultBadge = (response = {}, container) => {
    let githubProfile = {
        'Public Repos': [response.public_repos, "badge bg-primary"],
        'Public Gists': [response.public_gists, "badge bg-secondary"],
        'Followers': [response.followers, "badge bg-success"],
        'Following': [response.following, "badge bg-info"]
    }

    for (const key in githubProfile) {
        const spanEl = document.createElement('span');
        spanEl.className = githubProfile[key][1]
        spanEl.innerText = `${key}: ${githubProfile[key][0]}`
        container.appendChild(spanEl)
    }
    return container
};



//         <div class="col-md-9">
//             <h3>Rien Coertjens</h3>
//             <small>null</small>
{/* <br><br> */ }
//             <span class="badge bg-primary">Public Repos: 52</span>
//             <span class="badge bg-secondary">Public Gitsts: 6</span>
//             <span class="badge bg-success">Followers: 6</span>
//             <span class="badge bg-info">Following: 7</span>

//             <br><br>

//             <ul clas="list-group">
//                 <li class="list-group-item">Company: null</li>
//                 <li class="list-group-item">Website/Blog: rien.coertjens.me</li>
//                 <li class="list-group-item">Location: Antwerp, Belgium</li>
//                 <li class="list-group-item">Account Created: 2018-02-10T16:23:44Z</li>
//             </ul>
//         </div>