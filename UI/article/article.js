function getIdFromQuery() {
    const parts = window.location.search.match(/\?id=([0-9])+/);
    return parts[1];
};
const API_URL = 'http://localhost:3000/api/articles/'

const product_id = getIdFromQuery();
console.log(product_id);

const showProduct = (product) => {
    console.log(product)
    const article = document.querySelector('.article-show-item');
    article.innerHTML = `
        <h1>
        ${product.title}
    </h1>
    <p>${product.body}</p>
    <div class="article-time">
        ${product.createdOn}
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

const getProduct = (id) => {
    return fetch(API_URL + product_id)
        .then(res => res.json());
}

getProduct(product_id)
    .then(showProduct);