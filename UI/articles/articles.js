const a = document.querySelector('.articles');
const API_URL = 'http://localhost:3000/api/articles';

window.addEventListener('load', async () => {
    let articles = [];

    //console.log('it loaded');
    const res = await fetch(API_URL);
    const data = await res.json();
    //const b = await console.log(data);
    articles = await [...data];
    //await console.log(articles);
    await articles.forEach(article => {
        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        const arc = document.createElement('a');
        h1.appendChild(arc)
        div.classList.add('article-post');
        arc.setAttribute('href', `articles/${article.id}`)
        arc.innerText = article.title;
        div.appendChild(h1);
        a.appendChild(div);
        console.log(div)
        console.log(article)
    })

    // fetch(API_URL)
    //     .then(res => res.json())
    //     .then(data => {
    //         articles = [...data]
    //         // let a = [...data];
    //         // a.forEach(d => articles.push(d))
    //         console.log(articles)

    //     })
    //     .catch(err => console.log(err));

    // console.log(articles[1]);
    // console.log(articles.length);

});

//console.log(articles);
// articles.forEach(article => {
//     console.log(article.title);
// });


// const ar = [{
//     title: 'hdlsln'
// }, {
//     title: 'kdkd'
// }, {
//     title: 'ehy'
// }];
// console.log(ar)

//console.log('hey')