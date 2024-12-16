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
    try {
      const buttonContainer = document.getElementById(buttonContainerId)
      // initialize document fragment which will be added to the DOM later
      const fragments = document.createDocumentFragment()

      // create article buttons and add attributes
      const buttonFragments = articleButtonFactory(articles, btnClassList, fragments)
      
      // apply DOM changes to button container
      buttonContainer.appendChild(buttonFragments)
    } catch (err) {
      throw new Error(`Failed to create buttons. error: ${err}`)
    }
}

/**
 * #### Simple button factory that set certain attributes right away.
 * ____
 * @param { array } items 
 * @param { string } btnClassList 
 * @param { DocumentFragment } fragments 
 * @returns { DocumentFragment }
 */
const articleButtonFactory = (items, btnClassList, fragment) => {
  const result = fragment

  if (Array.isArray(items) && items.length >= 1 && items !== null) {
    items.forEach(item => {
      const button = document.createElement('button')
      const { id, headline } = item

      button.id = id
      button.type = 'button'
      button.textContent = headline
      button.classList = btnClassList

      button.setAttribute('aria-describedby', 'article-paragraph')
      button.setAttribute('role', 'menuitem')

      result.appendChild(button)
    })
  }

  return result
}
