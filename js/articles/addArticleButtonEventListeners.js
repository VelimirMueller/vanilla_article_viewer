import { debouncer } from '../utility/debouncer.js'

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
      let timer = null

      for (let i=0; i<articles.length; i++) {
        eventNames.forEach(evtName => {
          htmlCollection[i].addEventListener(evtName, () => {
            const { headline, text } = articles[i]
            const data = { headline, text, headlineId, textId }
            
            /**
             * To prevent all hovered elements will be focused right away, a debouncer has been used here. This basically reset the setTimeout to
             * highlight a button and display its corresponding headline and article text.
             */
            if (evtName === 'mouseover') { // Debounce hover selection so the hovered button will not be selected immediately.
              if (timer) { clearTimeout(timer) }
              timer = debouncer(() => { highlightElement(htmlCollection[i], data) }, 1000).createTimer()
            } else if (evtName === 'click' || evtName === 'focus') { // Show article headline and text right away on click or focus events.
              highlightElement(htmlCollection[i], data)
            }
            
            /**
             * Add a mouseleave event to clear an existing timer, so when leaving an article button it will not be selected 
             * by executing a still ticking setTimeout().
             */
            htmlCollection[i].addEventListener('mouseleave', () => { 
              if (timer) { clearTimeout(timer) }
            })
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

/**
 * #### Helper function to hande the display of articles and highlighting of button.
 * ____
 * @param {HTMLElement} htmlElement
 * @param {{headline: string, headlineId: string, text: string, textId: string }} data
 */
const highlightElement = (htmlElement, data) => {
  htmlElement.focus()
  document.getElementById(data.headlineId).innerText = data.headline
  document.getElementById(data.textId).innerHTML = data.text
}
