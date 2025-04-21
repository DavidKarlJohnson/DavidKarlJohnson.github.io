
/**
 * Shows the signup popup window in the lower right corner 
 */
function showSignupPopup() {
    const popup = document.querySelector(".signup-popup");
    popup.style.visibility = "visible";
}


/**
 * Shows the login popup window in the lower right corner 
 */
function showLoginPopup() {
    const popup = document.querySelector(".login-popup");
    popup.style.visibility = "visible";
}


/**
 * Reveals the banner popup with the given argument text and background color, just below the header
 * @param {string} text - The text to display in the banner popup
 * @param {string} backgroundColor - The background color of the banner popup
 */
function showBannerPopup(text, backgroundColor) {
    const popup = document.querySelector(".banner-popup");
    const paragraph = document.querySelector(".banner-popup p");
    popup.style.visibility = "visible";
    popup.style.backgroundColor = backgroundColor;
    paragraph.textContent = text;
}


/**
 * Hides all popups on the page
 */
function hideAllPopups() {
    const signupPopup = document.querySelector(".signup-popup");
    const loginPopup = document.querySelector(".login-popup");
    const bannerPopup = document.querySelector(".banner-popup");
    signupPopup.style.visibility = "hidden";
    loginPopup.style.visibility = "hidden";
    bannerPopup.style.visibility = "hidden";
}