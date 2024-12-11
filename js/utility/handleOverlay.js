
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
            if (!!isOverlayVisible) {
                document.getElementById(overlayId).style.display = 'none';
            } else {
                document.getElementById(overlayId).style.display = 'flex';
            }0

            isOverlayVisible = !isOverlayVisible
        }
    }   
}