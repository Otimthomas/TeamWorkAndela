function getIdFromQuery() {
    const parts = window.location.search.match(/\?id=([0-9])+/);
    return parts[1];
};
const API_URL = 'http://localhost:3000/api/articles/'

const article_id = getIdFromQuery();
console.log(article_id);

const showArticle = (article) => {
    console.log(article)
    const art = document.querySelector('.article-show-item');
    art.innerHTML = `
        <h1>
        ${article.title}
    </h1>
    <p>${article.body}</p>
    <div class="article-time">
        ${article.createdOn}
        <!-- Time will go here -->
    </div>
    <div class="article-menus">
        <!-- Here we have two links -->
        <a href="#">Edit</a>
        <a href="./articles.html">Delete</a>
    </div>
    <div>
        <a href="">Comment</a>
    </div>
    `
}

const getArticle = (id) => {
    return fetch(API_URL + article_id)
        .then(res => res.json());
}

getArticle(article_id)
    .then(showArticle);