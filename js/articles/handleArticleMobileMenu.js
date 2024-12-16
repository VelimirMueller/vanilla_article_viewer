/**
 * #### Helper function to hold state of mobile menu and set appropriate dynamic styles to it.
 * ____  
 */
const handleSideMenu = () => {
    let isVisible = true

    return {
        setVisible: () => {
            isVisible = true
            document.getElementById('article-button-container').style.display = 'grid'
        },

        hide: () => {
            isVisible = false
            document.getElementById('article-button-container').style.display = 'none'
            document.getElementById('articles-menu').style.width = '60px'
            document.getElementById('articles-menu').style.backgroundColor = 'rgba(0, 0, 0, 0)'
        },

        setMobileBg: () => {
            document.getElementById('articles-menu').style.backgroundColor = 'rgba(20, 20, 20, 0.25)'
            document.getElementById('articles-menu').style.width = '300px'
        },

        setLargerScreenBg: () => {
            document.getElementById('articles-menu').style.backgroundColor = 'rgba(0, 0, 0, 0)'
            document.getElementById('articles-menu').style.width = '100%'
            
        },

        getState: () => {
            return isVisible
        },
    }
}

/**
 * ### Handles the display state of the mobile articles menu
 * ____
 * Checks the current window size and auto sets thqe article button list to visible if the screen size threshold
 * has been set. Also handles the toggling of the mobile menu if in mobile mode.
 * @param {string} mobileMenuId
 */
export const sideMenuHandler = (mobileMenuId) => {
    const sideMenuHandler = handleSideMenu()
    const mediaQuery = window.matchMedia('(min-width: 768px)')

    document.getElementById(mobileMenuId).addEventListener('click', () => {
        if (sideMenuHandler.getState()) {
        sideMenuHandler.hide()
        } else {
        sideMenuHandler.setVisible()
        sideMenuHandler.setMobileBg()
        }
    })


    // to enable button list if screen size gets changed to threshold
    mediaQuery.addEventListener('change', () => {
        if (mediaQuery.matches) {
            sideMenuHandler.setVisible()
            sideMenuHandler.setLargerScreenBg()      
        } else {
            sideMenuHandler.setVisible()
            sideMenuHandler.setMobileBg()
        }
    })
}