export const fetchArticles = () => {
    return fetch('/data/articles.json').then(data => data.json()).then(data => data)
}