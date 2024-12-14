/**
 * ### Toggles the state of the overlay and hold the visibility state in `isOverlayVisible`.
 * Also handles `aria-pressed` and `aria-hidden` attributes for the overlay element
 * and for both overlay toggle buttons.
 * 
 * ____
 * Example usage:
 * - initialize handler:
 * `const overlayHandler = handleOverlay(false)`
 * 
 * - toggleOverlay():
 * `overlayHandler.toggleOverlay('template__overlay', htmlButtonElement)`
 * 
 * * - getState():
 * `const isOverlay = overlayHandler.getState()`
 *  @returns {Function} toggleOverlay()
 *  @returns {Function} getState()
 */
export const handleOverlay = () => {
    // initialize state of overlay
    let isOverlayVisible = false

    return {
        /**
         * #### Toggles the overlay by toggling the `isOverlayVisible` state
         * ____
         * @param {string} overlayId
         * @param {HTMLElement} toggleButton
         */
        toggleOverlay: async (overlayId) => {
            const overlayElement = document.getElementById(overlayId) 
            // throw error if overlay id is wrong
            if (!overlayElement || overlayElement === null) {
                throw new Error(`Can't find overlay to toggle with provided overlay id: ${overlayId}`)
            }
            
            // Toggle visibility and set aria-hidden attribute accordingly on overlay visibility
            toggleVisibility(overlayId, isOverlayVisible, overlayElement)
            
            // Toggle the state within the outer function's scope
            isOverlayVisible = !isOverlayVisible
        },
        
        // getter to check check state from the outside
        getState: () => {
            return isOverlayVisible
        }
    }   
}

/**
 * Helper function to handle overlay visibility
 * ___
 * @param {string} overlayId 
 * @param {boolean} isOverlayVisible 
 * @param {HTMLElement} overlayElement 
 * @param {HTMLElement} toggleButton 
 */
const toggleVisibility = (overlayId, isOverlayVisible, overlayElement) => {
  if (isOverlayVisible && overlayElement && overlayElement !== null) {
    setInvisible(overlayElement)
  } else if (document.getElementById(overlayId) !== null) {
    setVisible(overlayElement)
  }
}

const showButton = document.getElementById('article-show-button')

/**
 * Helper function to set visibility from `display:flex` to 
 * `display:none` along with aria-hidden and
 * aria-pressed attributes for the overlay and toggle buttons.
 * ___
 * @param {HTMLElement} overlay 
 * @param {HTMLElement} button 
 */
const setInvisible = (overlay) => {
  try {
    overlay.style.display = 'none'
    showButton.setAttribute('tabindex', '0')
  }
  catch (err) {
    throw new Error(`Something went wrong while setting overlay to visible. error: ${err}`)
  }
}

/**
 * Helper function to set visibility from `display:none` to 
 * `display:flex` along with aria-hidden and
 * aria-pressed attributes for the overlay and toggle buttons.
 * ___
 * @param {HTMLElement} overlay 
 * @param {HTMLElement} button 
 */
const setVisible = (overlay) => {
  try {
    const highlightButton = document.getElementsByClassName('btn__secondary--article')[0]
    
    showButton.blur()
    showButton.setAttribute('tabindex', '-1')
    overlay.style.display = 'flex'
    highlightButton.focus()
  } catch (err) {
    throw new Error(`Something went wrong while setting overlay to visible. error: ${err}`)
  }
}
