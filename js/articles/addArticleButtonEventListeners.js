/**
 * ### Attaches event listeners to article buttons.
 * ____
 * To ensure the correct article text and headline will be displayed within the article wrapper 
 * on all kinds of devices, several event types need to be attached to the article buttons.
 * To achieve this, an HTMLCollection will be created by providing a className as parameter to this function. 
 * To determine where the content will be displayed, the article headline id and the paragraph id of the html elements will be used.
 * @param {string} className  
 * @param {object} articles 
 * @param {string} headlineId 
 * @param {string} textId 
 */
export const addArticleButtonEventListeners = (className, articles, headlineId, textId) => {
  // add event listener to article buttons
  const htmlCollection = document.getElementsByClassName(className)
  const eventNames = ['focus', 'mouseover', 'click'] // make sure keyboard navigation renders the corrrect text
  
  try {
    if (htmlCollection.length && htmlCollection !== null) {
      for (let i=0; i<articles.length; i++) {
        eventNames.forEach(evtName => {
          htmlCollection[i].addEventListener(evtName, () => {
            const { headline, text } = articles[i]
              /**
               * Focus hovered element and set headline and text for article wrapper.
               * This ensures that the hovered last item remains in a visually active state.
               * On mobile devices we need to click the button because it is not possible to
               * hover on those in a traditional way.
               */
              htmlCollection[i].focus()
              document.getElementById(headlineId).innerText = headline
              document.getElementById(textId).innerHTML = text
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

/**
 * Prevents the show button to be focused if overlay is visible.
 * ____
 * 
 * @param {object} handler 
 * @param {HTMLElement} showButton 
 * @param {HTMLElement} elementToFocus 
 */
export const preventHiddenShowButtonToBeFocused = (handler, showButton, elementToFocus) => {
  document.addEventListener('keyup', evt => {
    if (evt.key === 'Tab' && handler.getState() && showButton === document.activeElement) {
      elementToFocus.focus()
    }
  })
}
