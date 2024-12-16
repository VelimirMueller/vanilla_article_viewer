/**
 * #### Convenience wrapper to set all overlay aria attributes.
 * ____
 * @param {{showButton: HTMLElement, closeButton: HTMLElement, overlay: HTMLElement}} components 
 * @returns 
 */
export const ariaOverlayAttributeInitializer = (components) => {
  const { showButton, closeButton, overlay } = components
  const showAttributes = [
    { component: showButton, attributes: [{ ariaAttr: 'aria-inert', ariaValue: 'true' }] },
    { component: closeButton, attributes: [{ ariaAttr:  'aria-inert', ariaValue: 'false' }] },
    { component: overlay, attributes: [{ ariaAttr:  'aria-hidden', ariaValue: 'false' }] },
  ]

  const hideAttributes = [
    { component: showButton, attributes: [{ ariaAttr: 'aria-inert', ariaValue: 'false' }] },
    { component: closeButton, attributes: [{ ariaAttr:  'aria-inert', ariaValue: 'true' }] },
    { component: overlay,  attributes: [{ ariaAttr:  'aria-hidden', ariaValue: 'true' }]}
  ]

  return {
    getShowAtributes: () => {
      return showAttributes
    },

    getHideAtrributes: () => {
      return hideAttributes
    }
  }
}

export const ariaArticlesMenuAttributeInitializer = () => {
  
}
