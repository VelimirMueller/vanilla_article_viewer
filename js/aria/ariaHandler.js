/**
 * ### Sets all aria attributes, for all components that need to update any of their aria attributes.
 * Pass an array of objects containing in every entry a component and an array of objects including an
 * aria-attribute of type `string` and and aria value of type `string`.
 * ___
 * @param {[{component: HTMLElement, attributes: {ariaAttr: string, ariaValue: string}]} components
 */
export const ariaHandler = (components) => {
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
    if (
      !!ariaAttr 
      && typeof ariaAttr === 'string' 
      && ariaAttr !== '' 
      && ariaAttr.startsWith('aria')) {
      
      return true
    } 
    
    return false
  } catch (err) {
    throw new Error(`Could not check aria validity due to error: ${err}`)
  }
}
