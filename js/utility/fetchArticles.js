/**
 * Fetches articles data from local articles.json file
 * ___
 * @returns Promise
 */
export const fetchArticles = async () => {
    try {
        const response = await fetch('/data/articles.json')

        if (!response.ok) {
            throw new Error(`Oooops! Something went wrong loading the local file. status: ${response.status} text: ${response.statusText}`)
        }

        const data = response.json()

        return data
    } catch (err) {
        throw new Error(`Error while loading data. error: ${err}`)
    }
}
