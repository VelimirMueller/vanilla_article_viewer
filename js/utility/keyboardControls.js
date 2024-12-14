export const closeOnEscape = (target) => {
    document.addEventListener('keydown', evt => {
        if (evt.key === 'Escape') {
            target.click()
        }
    })
}
