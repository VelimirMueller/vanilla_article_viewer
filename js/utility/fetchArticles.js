/**
 * Fetches articles data from local articles.json file
 * ___
 * @returns Promise
 */
export const fetchArticles = async () => {
    try {
        return fetch('/data/articles.json').then(response => response.json())
    } catch (err) {
        throw new Error(`Error while loading data. error: ${err}`)
    }
}
