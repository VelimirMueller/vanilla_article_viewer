/**
 * Clicks `target` when Escape is pressed, but only while `isOpen()` returns true.
 * Without this guard, Escape on a closed overlay toggles it open again.
 * ___
 * @param {HTMLElement} target
 * @param {() => boolean} isOpen
 */
export const closeOnEscape = (target, isOpen) => {
  document.addEventListener('keydown', evt => {
    if (evt.key === 'Escape' && isOpen()) {
      target.click()
    }
  })
}
