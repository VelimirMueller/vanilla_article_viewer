/**
 * ### Creates article buttons dynamically
 * ---
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

/**
 * Attaches event listeners to article buttons.
 * ---
 * To ensure the correct article text and headline will be displayed within the article wrapper 
 * on all kinds of devices, several event types need to be attached to the article buttons.
 * To achieve this, an HTMLCollection will be created by providing a className as parameter to this function. 
 * To determine where the content will be displayed, the article headline id and the paragraph id of the html elements will be used.
 * @param {string} className  
 * @param {object} articles 
 * @param {string} headlineId 
 * @param {string} textId 
 */
export const addEventListeners = (className, articles, headlineId, textId) => {
    // add event listener to article buttons
    const htmlCollection = document.getElementsByClassName(className)
    const eventNames = ['focus', 'mouseover', 'click'] // make sure keyboard navigation renders the corrrect text
    try {
      if (htmlCollection.length && htmlCollection !== null) {
        for (let i=0; i<articles.length; i++) {
          eventNames.forEach(evtName => {
            htmlCollection[i].addEventListener(evtName, () => {
                /**
                 * Focus hovered element and set headline and text for article wrapper.
                 * This ensures that the hovered last item remains in a visually active state.
                 * On mobile devices we need to click the button because it is not possible to
                 * hover on those in a traditional way.
                 */
                htmlCollection[i].focus()
                document.getElementById(headlineId).innerText = articles[i].headline
                document.getElementById(textId).innerText = articles[i].text
            })
          })
        }
      } else {
        throw new Error(`Could not find an HTMLCollection with provided className: ${className}`)
      }
    } catch (err) {
      throw new Error(`Something went wrong while adding event listeners to the article buttons. error: ${err}`)
    }
}
