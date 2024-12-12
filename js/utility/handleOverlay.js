
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
    let isOverlayVisible = state

    return {
        /**
         * Toggles the overlay by toggling the `isOverlayVisible` state
         * @param {string} overlayId
         */
        toggleOverlay: (overlayId) => {
            const overlayElement = document.getElementById(overlayId)
            
            if (!overlayElement || overlayElement === null) {
                throw new Error(`Can't find overlay to toggle with provided overlay id: ${overlayId}`)
            }

            if (isOverlayVisible && overlayElement && overlayElement !== null) {
                overlayElement.style.display = 'none';
            } else if (document.getElementById(overlayId) !== null) {
                overlayElement.style.display = 'flex';
            }

            isOverlayVisible = !isOverlayVisible
        }
    }   
}