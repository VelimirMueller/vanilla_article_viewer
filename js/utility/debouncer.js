/**
 * Basic debouncer to prevent a function to be called if the timeout inside is still ticking.
 * ____
 * Set a callback to be executed after the time interval is up
 * @param {function} callback 
 * @param {number} interval 
 */
export const debouncer = (callback, interval) => {
  let timer

  return {
    // Conveniently set a timer
    createTimer: () => {
      timer = setTimeout(() => {
        callback()
      }, interval )

      return timer
    },

    clearTimer: () => {
      clearInterval(timer)
    },

    restartTimer: () => {
      clearTimeout(timer)
      createTimer()
    },
  }
}