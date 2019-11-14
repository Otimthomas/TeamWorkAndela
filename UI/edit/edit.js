function getIdFromQuery() {
    const parts = window.location.search.match(/\?id=([0-9])+/);
    return parts[1];
};
const articleId = getIdFromQuery();
console.log(articleId);
const form = document.querySelector('form');
const API_URL = 'http://localhost:3000/api/articles/';

const populateArticle = (Id) => {
    return fetch(API_URL + Id).then(res => res.json())
}

populateArticle(articleId).then(d => {
    // const p = document.createElement('p');
    // const input = document.createElement('input');
    // input.setAttribute("name", "title")
    // input.setAttribute("value", `${d.title}`);
    // form.appendChild(input);
    // console.log(input);

    form.innerHTML = `
    <p>Article Title</p>
    <input type="text" value="${d.title}" name="title" required>
    <p>Article Boby</p>
    <textarea name="body">${d.body}</textarea>
    <button>Save</button>
    `
})

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const title = formData.get('title');
    const body = formData.get('body');
    console.log(body)

    const data = {
        title,
        body
    };



    const editArticle = () => {
        return fetch(API_URL + articleId, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json());
    }
    editArticle();
});

// [x] The page should be in position to access the id from the queryParams.
// [x] Use fetch to get a particular article using the id provided above.
// [x] Populate the form using the data returned from the fetch.
// [] After a successful edit, the user should be redirected back to the articles page.
//