/**
 * ### Creates article buttons dynamically
 * ____
 * By creating buttons in memory first, the index.html markup will remain
 * relatively short and the buttons contain all relevat data right away.
 * 
 * Performance is ensured because we create fragments of buttons before adding them directly to the DOM.
 * This way only one DOM update is needed instead of one for every iteration of articles.
 * @param {string} buttonContainerId 
 * @param {object} articles 
 * @param {string} headlineTargetId 
 * @param {string} paragraphTargetId 
 */
export const createArticleButtons = (buttonContainerId, articles, btnClassList) => {
    try{
      const buttonContainer = document.getElementById(buttonContainerId)
      // initialize document fragment which will be added to the DOM later
      const fragments = document.createDocumentFragment()

      // create article buttons and add attributes
      articles.forEach(article => {
        const button = document.createElement("button")
        
        button.id = `${article.id}`
        button.textContent = article.headline
        button.type = 'button'
        button.classList = btnClassList
        
        // add button to fragments
        fragments.appendChild(button)
      })
      
      // apply DOM changes to button container
      buttonContainer.appendChild(fragments)
    } catch (err) {
      throw new Error(`Failed to create buttons. error: ${err}`)
    }
}
