const API_URL = 'http://localhost:3000/api/articles';
const form = document.querySelector('form');


form.addEventListener('submit', (event) => {
    event.preventDefault()

    const formData = new FormData(form);
    const title = formData.get('title');
    const body = formData.get('body');

    const data = {
        title,
        body
    }

    console.log(data);


    const createArticle = () => {
        return fetch(API_URL, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    }

    createArticle().then(d => console.log(d))
})