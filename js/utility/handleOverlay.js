
/**
 * Toggles the state of the overlay and hold the visibility state in `isOverlayVisible`.
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
            if (isOverlayVisible && overlayElement && overlayElement !== null) {
                overlayElement.setAttribute('aria-hidden', 'true')
                toggleButton.setAttribute('aria-expanded', 'false')
                overlayElement.style.display = 'none'
            } else if (document.getElementById(overlayId) !== null) {
                overlayElement.setAttribute('aria-hidden', 'false')
                toggleButton.setAttribute('aria-expanded', 'true')
                overlayElement.style.display = 'flex'
            }
            
            // Toggle the state within the outer function's scope
            isOverlayVisible = !isOverlayVisible
        },
        
        // getter to check check state from the outside
        getState: () => {
            return isOverlayVisible
        }
    }   
}
