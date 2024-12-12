/**
 * ### Creates buttons which have an hover event listener directly attached to them.
 * ---
 * By creating buttons in memory and attach all event listeners to them here, the index.html markup will remain
 * relatively short and the buttons provide all functionality out of the box.
 * 
 * Performance is ensured because we create fragments of buttons before adding them directly to the DOM.
 * This way only one DOM update is needed instead of one for every iteration of articles.
 * @param {string} buttonContainerId 
 * @param {id: string, text: string, headline: string} articles 
 * @param {string} headlineTargetId 
 * @param {string} paragraphTargetId 
 */
export const createArticleButtons = (buttonContainerId, articles) => {
    try{
      const buttonContainer = document.getElementById(buttonContainerId)
      // initialize document fragment which will be added to the DOM later
      const fragments = document.createDocumentFragment()

      // create article buttons and add attributes
      articles.forEach(article => {
        console.log(article)
        const button = document.createElement("button")
        button.id = `${article.id}`
        button.textContent = article.headline
        button.classList = 'btn btn__secondary btn__secondary--article'
        
        // add button to fragments
        fragments.appendChild(button)
      })

      buttonContainer.appendChild(fragments)
      document.body.appendChild(fragments)
    } catch (err) {
      throw new Error(`Failed to create buttons. error: ${err}`)
    }
}

export const addEventListeners = (className, articles, headlineId, textId) => {
    // add event listener directly to the button fragment
    const htmlCollection = document.getElementsByClassName(className)
    const eventNames = ['focus', 'mouseover', 'click']
    for (let i=0; i<articles.length; i++) {
        eventNames.forEach(evtName => {
            htmlCollection[i].addEventListener(evtName, () => {
                document.getElementById(headlineId).innerText = articles[i].headline
                document.getElementById(textId).innerText = articles[i].text
            })
        })
    }
}
