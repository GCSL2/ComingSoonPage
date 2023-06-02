const fade = document.querySelector("#fade")
const link = document.querySelector("#link")
const openModal = document.querySelector("#open-modal")
const closeModal = document.querySelector("#close-modal")
const modal = document.querySelector("#modal")

const toggleModal = () => {
    modal.classList.toggle("hide")
    fade.classList.toggle("hide")
}

[openModal, closeModal, fade, link].forEach((el) => {
    el.addEventListener("click", () =>toggleModal())
});

function setVh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Execute a função uma vez quando a página é carregada
setVh();

// Execute a função novamente sempre que a janela é redimensionada
window.addEventListener('resize', setVh);