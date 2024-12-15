/**
 * ### Sets all aria attributes, for all components that need to update any of their aria attributes.
 * Pass an array of objects containing in every entry a component and an array of objects including an
 * aria-attribute of type `string` and and aria value of type `string`.
 * ___
 * @param {[{component: HTMLElement, attributes: {ariaAttr: string, ariaValue: string}]} components
 */
const ariaOverlayHandler = (components) => {
  console.log(components)
  
    if (components.length > 0) {
      components.forEach(comp => {
        const { component, attributes } = comp
        attributes.forEach(attrs => {
            const { ariaAttr, ariaValue } = attrs
            if (checkAriaAttributeValidity(ariaAttr)) {
                component.setAttribute(ariaAttr, ariaValue)
            } else {
              throw new Error(`Something went wrong when setting aria attribute: "${ariaAttr}" to "${ariaValue}" for component: ${component.id}.`)
            }
        })
    })
  }
}

/**
 * #### Checks if an attribute is of correct type and attribute starts with aria
 * ___
 * @param {string} ariaAttr
 * @returns {boolean}
 */
const checkAriaAttributeValidity  = (ariaAttr) => {
  try {
    if (!!ariaAttr && typeof ariaAttr === 'string' && ariaAttr !== '') {
      return true
    } 
    
    return false
  } catch (err) {
    throw new Error(`Could not check aria validity due to error: ${err}`)
  }
}

/**
 * Handles aria states for components with dynamic aria attributes.
 * ____
 * Needs a handler to toggle the state, the component to attach the even listener to 
 * and the aria attributes with corresponding values in "{key,value}"-paris
 * @param {Function} handler 
 * @param {HTMLElement} component 
 * @param {object[]} attributes
 */
export const handleAriaStates = async (handler, component, attributes) => {
  component.addEventListener('click', async () => {
    await handler.toggleOverlay('overlay',)
    if (handler.getState()) {
      ariaOverlayHandler(attributes)
    }
  })
}