// JS for snackbar

const snackbarToggleBtn = document.querySelector(".btn-show-snackbar")
const snackbar = document.querySelector(".snackbar")

snackbarToggleBtn.addEventListener("click", () => {
    snackbar.classList.toggle("show-snackbar")
    setTimeout(() => {
        snackbar.classList.toggle("show-snackbar")
    }, 5000);
})