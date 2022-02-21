// JS for modal component

const modalOpenBtn = document.querySelector(".btn-open-modal")
const modalContainer = document.querySelector(".modal-container")
const modalCloseBtn = document.querySelector(".btn-close-modal")

if (modalOpenBtn) {

    modalOpenBtn.addEventListener("click", () => {
        modalContainer.classList.toggle("modal-visible")
    })
    modalCloseBtn.addEventListener("click", () => {
        modalContainer.classList.toggle("modal-visible")
    })
}
