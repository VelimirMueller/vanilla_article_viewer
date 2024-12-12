
/**
 * Toggles the state of the overlay and hold the visibility state in `isOverlayVisible`.
 * Also handles `aria-pressed` and `aria-hidden` attributes for the overlay element
 * and for both overlay toggle buttons.
 * 
 * ---
 * Example usage:
 * - initialize handler:
 * `const overlayHandler = handleOverlay(false)`
 * 
 * - toggle overlay:
 * `overlayHandler.toggleOverlay('template__overlay')`
 * @param { string } state
 */
export const handleOverlay = (state) => {
    // initialize state of overlay
    let isOverlayVisible = state

    return {
        /**
         * Toggles the overlay by toggling the `isOverlayVisible` state
         * @param {string} overlayId
         * @param {HTMLElement} toggleButton
         */
        toggleOverlay: async (overlayId, toggleButton) => {
            const overlayElement = document.getElementById(overlayId) 
            // throw error if overlay id is wrong
            if (!overlayElement || overlayElement === null) {
                throw new Error(`Can't find overlay to toggle with provided overlay id: ${overlayId}`)
            }
            
            // Toggle visibility and set aria-hidden attribute accordingly on overlay visibility
            toggleVisibility(overlayId, isOverlayVisible, overlayElement, toggleButton)
            
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
const toggleVisibility = (overlayId, isOverlayVisible, overlayElement, toggleButton) => {
  if (isOverlayVisible && overlayElement && overlayElement !== null) {
    setVisible(overlayElement, toggleButton)
  } else if (document.getElementById(overlayId) !== null) {
    setInvisible(overlayElement, toggleButton)
  }
}

/**
 * Helper function to set visibility from `display:flex` to 
 * `display:none` along with aria-hidden and
 * aria-pressed attributes for the overlay and toggle buttons.
 * ___
 * @param {HTMLElement} overlay 
 * @param {HTMLElement} button 
 */
const setVisible = (overlay, button) => {
  overlay.setAttribute('aria-hidden', 'true')
  button.setAttribute('aria-pressed', 'false')
  overlay.style.display = 'none'
}

/**
 * Helper function to set visibility from `display:none` to 
 * `display:flex` along with aria-hidden and
 * aria-pressed attributes for the overlay and toggle buttons.
 * ___
 * @param {HTMLElement} overlay 
 * @param {HTMLElement} button 
 */
const setInvisible = (overlay, button) => {
  overlay.setAttribute('aria-hidden', 'false')
  button.setAttribute('aria-pressed', 'true')
  overlay.style.display = 'flex'
}
