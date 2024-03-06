const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup")
const hidePopupBtn = document.querySelector(".form-popup .close-btn");
const loginsignupLink = document.querySelector(".form-box .botton-link a");

// Show from popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

// Hide from popup
hidePopupBtn.addEventListener("click", () =>showPopupBtn.click());

loginsignupLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === "signup-link" ? add' : 'remove']("show-signup");
    });
});